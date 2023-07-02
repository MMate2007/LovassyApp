# \LolosApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**api_lolos_get**](LolosApi.md#api_lolos_get) | **GET** /Api/Lolos | 
[**api_lolos_own_get**](LolosApi.md#api_lolos_own_get) | **GET** /Api/Lolos/Own | 



## api_lolos_get

> crate::models::ShopIndexLolosResponse api_lolos_get(filters, sorts, page, page_size)


<b>Requires verified email</b><br><b>Requires one of the following permissions</b>: Shop.IndexLolos<br><b>Requires the following features to be enabled</b>: Shop

### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**filters** | Option<**String**> |  |  |
**sorts** | Option<**String**> |  |  |
**page** | Option<**i32**> |  |  |
**page_size** | Option<**i32**> |  |  |

### Return type

[**crate::models::ShopIndexLolosResponse**](ShopIndexLolosResponse.md)

### Authorization

[Token](../README.md#Token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## api_lolos_own_get

> crate::models::ShopIndexOwnLolosResponse api_lolos_own_get(filters, sorts, page, page_size)


<b>Requires verified email</b><br><b>Requires one of the following permissions</b>: Shop.IndexOwnLolos<br><b>Requires the following features to be enabled</b>: Shop

### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**filters** | Option<**String**> |  |  |
**sorts** | Option<**String**> |  |  |
**page** | Option<**i32**> |  |  |
**page_size** | Option<**i32**> |  |  |

### Return type

[**crate::models::ShopIndexOwnLolosResponse**](ShopIndexOwnLolosResponse.md)

### Authorization

[Token](../README.md#Token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)
