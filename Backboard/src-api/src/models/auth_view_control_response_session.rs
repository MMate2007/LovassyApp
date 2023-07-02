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
pub struct AuthViewControlResponseSession {
    #[serde(rename = "expiry", skip_serializing_if = "Option::is_none")]
    pub expiry: Option<String>,
}

impl AuthViewControlResponseSession {
    pub fn new() -> AuthViewControlResponseSession {
        AuthViewControlResponseSession {
            expiry: None,
        }
    }
}


