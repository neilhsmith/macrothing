import {
  BrandSummaryDto,
  BrandsApi,
  CreateBrandRequest,
  UpdateBrandRequest,
} from "@/api/generated/v1.0"
import { PaginatedList, getPaginationMetadata } from "@/api/pagination"
import { queryClient } from "@/query-client"
import {
  keepPreviousData,
  queryOptions,
  useMutation,
} from "@tanstack/react-query"

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
      queryClient.invalidateQueries({ queryKey: ["brands", "get", brandId] })
      queryClient.invalidateQueries({ queryKey: ["brands", "list"] })
    },
  })
