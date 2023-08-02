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
pub struct StatusViewVersionRequestBody {
    #[serde(rename = "sendOk")]
    pub send_ok: bool,
    #[serde(rename = "sendMOTD")]
    pub send_motd: bool,
}

impl StatusViewVersionRequestBody {
    pub fn new(send_ok: bool, send_motd: bool) -> StatusViewVersionRequestBody {
        StatusViewVersionRequestBody {
            send_ok,
            send_motd,
        }
    }
}


