import {
  BrandSummaryDto,
  BrandsApi,
  CreateBrandRequest,
  DeleteBrandsRequest,
  UpdateBrandRequest,
} from "@/api/generated/v1.0"
import { PaginatedList, getPaginationMetadata } from "@/api/pagination"
import { queryClient } from "@/query-client"
import {
  keepPreviousData,
  queryOptions,
  useMutation,
} from "@tanstack/react-query"
import { toast } from "sonner"

const api = new BrandsApi()

export const getBrandSummaryByIdQueryOptions = (brandId: number) =>
  queryOptions({
    queryKey: ["brands", "get", brandId],
    queryFn: async () => {
      const res = await api.getBrandSummary(brandId)
      return res.data
    },
  })

export const getBrandSummariesQueryOptions = (
  pageNumber: number,
  pageSize: number
) =>
  queryOptions({
    queryKey: ["brands", "list", { pageNumber, pageSize }],
    queryFn: async () => {
      const res = await api.getBrandSummaries(pageNumber, pageSize)
      return {
        items: res.data,
        paginationMetadata: getPaginationMetadata(res),
      } as PaginatedList<BrandSummaryDto>
    },
    placeholderData: keepPreviousData,
  })

export const useCreateBrandMutation = () =>
  useMutation({
    mutationFn: async (payload: CreateBrandRequest) => {
      const res = await api.createBrand(payload)
      return res.data
    },
    onSuccess: (data) => {
      toast.success("Brand created")
      queryClient.setQueryData(["brands", "get", data.id], data)
      queryClient.invalidateQueries({ queryKey: ["get-brand-summaries"] })
    },
  })

export const useUpdateBrandMutation = (brandId: number) =>
  useMutation({
    mutationKey: ["brands", "update", brandId],
    mutationFn: async (payload: UpdateBrandRequest) => {
      const res = await api.updateBrand(brandId, payload)
      return res.data
    },
    onSuccess: (data) => {
      toast.success("Brand updated")
      queryClient.setQueryData(["brands", "get", brandId], data)
      queryClient.invalidateQueries({ queryKey: ["brands", "list"] })
    },
  })

export const useDeleteBrandMutation = (brandId: number) =>
  useMutation({
    mutationFn: async () => {
      const res = await api.deleteBrand(brandId)
      return res.data
    },
    onSuccess: () => {
      toast.success("Brand deleted")
      queryClient.removeQueries({ queryKey: ["brands", "get", brandId] })
      queryClient.invalidateQueries({ queryKey: ["brands", "list"] })
      queryClient.invalidateQueries({ queryKey: ["brands", "update"] })
    },
  })

export const useDeleteBrandsMutation = () =>
  useMutation({
    mutationFn: async (payload: DeleteBrandsRequest) => {
      const res = await api.deleteBrands(payload)
      return res.data
    },
    onSuccess: (data) => {
      toast.success(`Deleted ${data} Brands`)
      queryClient.invalidateQueries({ queryKey: ["brands"] })
    },
  })
