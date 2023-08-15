export default function({ $gtm, route }) {
    //console.log('GOOGLE_TAG_MANAGER_ID', process.env.GOOGLE_TAG_MANAGER_ID)
    $gtm.init(process.env.GOOGLE_TAG_MANAGER_ID)
}
