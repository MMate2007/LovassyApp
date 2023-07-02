/*
 * Blueboard
 *
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: v4.0.0
 * 
 * Generated by: https://openapi-generator.tech
 */




#[derive(Clone, Debug, PartialEq, Serialize, Deserialize)]
pub struct ShopViewOwnedItemResponseProductInput {
    #[serde(rename = "type", default, with = "::serde_with::rust::double_option", skip_serializing_if = "Option::is_none")]
    pub r#type: Option<Option<String>>,
    #[serde(rename = "key", default, with = "::serde_with::rust::double_option", skip_serializing_if = "Option::is_none")]
    pub key: Option<Option<String>>,
    #[serde(rename = "label", default, with = "::serde_with::rust::double_option", skip_serializing_if = "Option::is_none")]
    pub label: Option<Option<String>>,
}

impl ShopViewOwnedItemResponseProductInput {
    pub fn new() -> ShopViewOwnedItemResponseProductInput {
        ShopViewOwnedItemResponseProductInput {
            r#type: None,
            key: None,
            label: None,
        }
    }
}


