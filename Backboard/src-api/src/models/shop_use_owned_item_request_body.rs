/*
 * Blueboard
 *
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: v4.0.0
 * 
 * Generated by: https://openapi-generator.tech
 */




#[derive(Clone, Debug, PartialEq, Default, Serialize, Deserialize)]
pub struct ShopUseOwnedItemRequestBody {
    #[serde(rename = "qrCodeContent", default, with = "::serde_with::rust::double_option", skip_serializing_if = "Option::is_none")]
    pub qr_code_content: Option<Option<String>>,
    #[serde(rename = "inputs", default, with = "::serde_with::rust::double_option", skip_serializing_if = "Option::is_none")]
    pub inputs: Option<Option<::std::collections::HashMap<String, String>>>,
}

impl ShopUseOwnedItemRequestBody {
    pub fn new() -> ShopUseOwnedItemRequestBody {
        ShopUseOwnedItemRequestBody {
            qr_code_content: None,
            inputs: None,
        }
    }
}

