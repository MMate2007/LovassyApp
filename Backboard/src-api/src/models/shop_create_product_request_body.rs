/*
 * Blueboard
 *
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 4.1.0
 * 
 * Generated by: https://openapi-generator.tech
 */




#[derive(Clone, Debug, PartialEq, Default, Serialize, Deserialize)]
pub struct ShopCreateProductRequestBody {
    #[serde(rename = "name")]
    pub name: String,
    #[serde(rename = "description")]
    pub description: String,
    #[serde(rename = "richTextContent")]
    pub rich_text_content: String,
    #[serde(rename = "visible")]
    pub visible: bool,
    #[serde(rename = "qrCodeActivated")]
    pub qr_code_activated: bool,
    #[serde(rename = "qrCodes")]
    pub qr_codes: Vec<i32>,
    #[serde(rename = "price")]
    pub price: i32,
    #[serde(rename = "quantity")]
    pub quantity: i32,
    #[serde(rename = "userLimited")]
    pub user_limited: bool,
    #[serde(rename = "userLimit")]
    pub user_limit: i32,
    #[serde(rename = "inputs")]
    pub inputs: Vec<crate::models::ShopCreateProductRequestBodyInput>,
    #[serde(rename = "notifiedEmails")]
    pub notified_emails: Vec<String>,
    #[serde(rename = "thumbnailUrl")]
    pub thumbnail_url: String,
}

impl ShopCreateProductRequestBody {
    pub fn new(name: String, description: String, rich_text_content: String, visible: bool, qr_code_activated: bool, qr_codes: Vec<i32>, price: i32, quantity: i32, user_limited: bool, user_limit: i32, inputs: Vec<crate::models::ShopCreateProductRequestBodyInput>, notified_emails: Vec<String>, thumbnail_url: String) -> ShopCreateProductRequestBody {
        ShopCreateProductRequestBody {
            name,
            description,
            rich_text_content,
            visible,
            qr_code_activated,
            qr_codes,
            price,
            quantity,
            user_limited,
            user_limit,
            inputs,
            notified_emails,
            thumbnail_url,
        }
    }
}


