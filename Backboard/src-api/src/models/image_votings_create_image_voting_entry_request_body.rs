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
pub struct ImageVotingsCreateImageVotingEntryRequestBody {
    #[serde(rename = "imageVotingId", skip_serializing_if = "Option::is_none")]
    pub image_voting_id: Option<i32>,
    #[serde(rename = "title")]
    pub title: String,
    #[serde(rename = "imageUrl")]
    pub image_url: String,
}

impl ImageVotingsCreateImageVotingEntryRequestBody {
    pub fn new(title: String, image_url: String) -> ImageVotingsCreateImageVotingEntryRequestBody {
        ImageVotingsCreateImageVotingEntryRequestBody {
            image_voting_id: None,
            title,
            image_url,
        }
    }
}


