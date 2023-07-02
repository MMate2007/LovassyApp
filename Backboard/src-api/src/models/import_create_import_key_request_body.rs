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
pub struct ImportCreateImportKeyRequestBody {
    #[serde(rename = "name")]
    pub name: String,
    #[serde(rename = "enabled")]
    pub enabled: bool,
}

impl ImportCreateImportKeyRequestBody {
    pub fn new(name: String, enabled: bool) -> ImportCreateImportKeyRequestBody {
        ImportCreateImportKeyRequestBody {
            name,
            enabled,
        }
    }
}


