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
pub struct ShopViewProductResponse {
    #[serde(rename = "id", skip_serializing_if = "Option::is_none")]
    pub id: Option<i32>,
    #[serde(rename = "name", default, with = "::serde_with::rust::double_option", skip_serializing_if = "Option::is_none")]
    pub name: Option<Option<String>>,
    #[serde(rename = "description", default, with = "::serde_with::rust::double_option", skip_serializing_if = "Option::is_none")]
    pub description: Option<Option<String>>,
    #[serde(rename = "richTextContent", default, with = "::serde_with::rust::double_option", skip_serializing_if = "Option::is_none")]
    pub rich_text_content: Option<Option<String>>,
    #[serde(rename = "visible", skip_serializing_if = "Option::is_none")]
    pub visible: Option<bool>,
    #[serde(rename = "qrCodeActivated", skip_serializing_if = "Option::is_none")]
    pub qr_code_activated: Option<bool>,
    #[serde(rename = "qrCodes", default, with = "::serde_with::rust::double_option", skip_serializing_if = "Option::is_none")]
    pub qr_codes: Option<Option<Vec<crate::models::ShopViewProductResponseQrCode>>>,
    #[serde(rename = "price", skip_serializing_if = "Option::is_none")]
    pub price: Option<i32>,
    #[serde(rename = "quantity", skip_serializing_if = "Option::is_none")]
    pub quantity: Option<i32>,
    #[serde(rename = "inputs", default, with = "::serde_with::rust::double_option", skip_serializing_if = "Option::is_none")]
    pub inputs: Option<Option<Vec<crate::models::ShopViewProductResponseInput>>>,
    #[serde(rename = "notifiedEmails", default, with = "::serde_with::rust::double_option", skip_serializing_if = "Option::is_none")]
    pub notified_emails: Option<Option<Vec<String>>>,
    #[serde(rename = "thumbnailUrl", default, with = "::serde_with::rust::double_option", skip_serializing_if = "Option::is_none")]
    pub thumbnail_url: Option<Option<String>>,
    #[serde(rename = "createdAt", skip_serializing_if = "Option::is_none")]
    pub created_at: Option<String>,
    #[serde(rename = "updatedAt", skip_serializing_if = "Option::is_none")]
    pub updated_at: Option<String>,
}

impl ShopViewProductResponse {
    pub fn new() -> ShopViewProductResponse {
        ShopViewProductResponse {
            id: None,
            name: None,
            description: None,
            rich_text_content: None,
            visible: None,
            qr_code_activated: None,
            qr_codes: None,
            price: None,
            quantity: None,
            inputs: None,
            notified_emails: None,
            thumbnail_url: None,
            created_at: None,
            updated_at: None,
        }
    }
}


