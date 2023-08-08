export default function ({ $axios }, inject) {
    // Create a custom axios instance
    const api = $axios.create({
        headers: {
            common: {
                Accept: 'text/plain, */*'
            }
        },
        params: {
            auth: "eyJhbGciOiJSUzI1NiIsImtpZCI6ImNmM2I1YWRhM2NhMzkxNTQ4ZDM1OTJiMzU5MjkyM2UzNjAxMmI5MTQiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vZmlyLWxvZ2luLWQyMTJkIiwiYXVkIjoiZmlyLWxvZ2luLWQyMTJkIiwiYXV0aF90aW1lIjoxNjkxNDY1NjM3LCJ1c2VyX2lkIjoiQndscGUyTURLcWIzQXJ3Z1hPMzFFUG11NEZKMiIsInN1YiI6IkJ3bHBlMk1ES3FiM0Fyd2dYTzMxRVBtdTRGSjIiLCJpYXQiOjE2OTE0NjU2MzcsImV4cCI6MTY5MTQ2OTIzNywiZW1haWwiOiJhZG1pbkBnbWFpbC5jb20iLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiYWRtaW5AZ21haWwuY29tIl19LCJzaWduX2luX3Byb3ZpZGVyIjoicGFzc3dvcmQifX0.K2xetMWlD2qdkdcENIBpmxUTnuckl08Z3ZEswwvopOEKcEvvDwYRkz7828VCZex9lw4Urm1MWdaIzNf4Qebt3EOrloS1FmOqoOd_fsUHIjqKeod_JuQM15yajwRHJkcm0Qjj7YQ0SNjc1IA4THuAfMd-lYg4VVOwQuv8QKB8bT9tWo73CnwiP7PP90CthgYfPORDfjkFFGHib7vfOwLFV4hcuWxFmZsdFHtReQytQo1YhjMv8x4YBt9_VdzXM1SpJy_gGsKHbLqjuDSKDNtYlWf_woS1Y05pcc8CPYNDx90GE4Z0zSkJCA_S6HklanHpzNzk-gNPP_Y41mb3zyk-2w"
        }
    })

    // Set baseURL to something different
    api.setBaseURL('https://fir-login-d212d-default-rtdb.asia-southeast1.firebasedatabase.app')

    // Inject to context as $api
    inject('api', api)
}
