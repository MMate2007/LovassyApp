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
pub struct AuthResetPasswordRequestBody {
    #[serde(rename = "newPassword")]
    pub new_password: String,
}

impl AuthResetPasswordRequestBody {
    pub fn new(new_password: String) -> AuthResetPasswordRequestBody {
        AuthResetPasswordRequestBody {
            new_password,
        }
    }
}

