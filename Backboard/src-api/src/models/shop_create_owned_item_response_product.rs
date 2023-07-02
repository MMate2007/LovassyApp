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
pub struct ShopCreateOwnedItemResponseProduct {
    #[serde(rename = "id", skip_serializing_if = "Option::is_none")]
    pub id: Option<i32>,
    #[serde(rename = "name", default, with = "::serde_with::rust::double_option", skip_serializing_if = "Option::is_none")]
    pub name: Option<Option<String>>,
    #[serde(rename = "description", default, with = "::serde_with::rust::double_option", skip_serializing_if = "Option::is_none")]
    pub description: Option<Option<String>>,
    #[serde(rename = "richTextContent", default, with = "::serde_with::rust::double_option", skip_serializing_if = "Option::is_none")]
    pub rich_text_content: Option<Option<String>>,
    #[serde(rename = "qrCodeActivated", skip_serializing_if = "Option::is_none")]
    pub qr_code_activated: Option<bool>,
    #[serde(rename = "inputs", default, with = "::serde_with::rust::double_option", skip_serializing_if = "Option::is_none")]
    pub inputs: Option<Option<Vec<crate::models::ShopCreateOwnedItemResponseProductInput>>>,
    #[serde(rename = "thumbnailUrl", default, with = "::serde_with::rust::double_option", skip_serializing_if = "Option::is_none")]
    pub thumbnail_url: Option<Option<String>>,
    #[serde(rename = "createdAt", skip_serializing_if = "Option::is_none")]
    pub created_at: Option<String>,
    #[serde(rename = "updatedAt", skip_serializing_if = "Option::is_none")]
    pub updated_at: Option<String>,
}

impl ShopCreateOwnedItemResponseProduct {
    pub fn new() -> ShopCreateOwnedItemResponseProduct {
        ShopCreateOwnedItemResponseProduct {
            id: None,
            name: None,
            description: None,
            rich_text_content: None,
            qr_code_activated: None,
            inputs: None,
            thumbnail_url: None,
            created_at: None,
            updated_at: None,
        }
    }
}


