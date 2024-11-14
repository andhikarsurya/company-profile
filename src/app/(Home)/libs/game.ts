const base_url = process.env.CONTENTFUL_BASE_URL
const space_id = process.env.CONTENTFUL_SPACE_ID
const token = process.env.CONTENTFUL_TOKEN
import resolveResponse from "contentful-resolve-response"
export const getGames = async () => {
    const res = await fetch(
        `${base_url}/spaces/${space_id}/environments/master/entries?access_token=${token}&content_type=games`,{next:{revalidate:1}}
    )
    const data = await res.json()

    const result = resolveResponse(data)
    return result
}
export const getGamesSlug = async (slug:string) =>{
    const res = await fetch(
        `${base_url}/spaces/${space_id}/environments/master/entries?access_token=${token}&content_type=games&fields.slug=${slug}`,{next:{revalidate:1}}
    )
    const data = await res.json()

    const result = resolveResponse(data)
    return result[0]
}
export const getGamesRecommend = async (slug:string) =>{
    const res = await fetch(
        `${base_url}/spaces/${space_id}/environments/master/entries?access_token=${token}&content_type=blog&fields.slug[ne]=${slug}&limit=3`,{next:{revalidate:1}}
    )
    const data = await res.json()

    const result = resolveResponse(data)
    return result
}