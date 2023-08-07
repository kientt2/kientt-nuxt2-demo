<template>
    <div>
        <h1>Create A New Post</h1>
        <div>
            <div>
                <div>
                    Title <input v-model="title" type="text" />
                </div>
                <div>
                    Content <input v-model="content" type="text" />
                </div>
                <div>
                    <button @click="submit">Submit</button>
                </div>
            </div>
        </div>
    </div>
</template>


<script>
export default {
    data() {
        return {
            title: '',
            content: ''
        }
    },
    methods: {
        async submit() {

            // validate
            if (this.title === '' || this.content === '') {
                alert('Validation failed! Please input title and content');
                return false;
            }
            //const token = "eyJhbGciOiJSUzI1NiIsImtpZCI6IjYyM2YzNmM4MTZlZTNkZWQ2YzU0NTkyZTM4ZGFlZjcyZjE1YTBmMTMiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vZmlyLWxvZ2luLWQyMTJkIiwiYXVkIjoiZmlyLWxvZ2luLWQyMTJkIiwiYXV0aF90aW1lIjoxNjkxMzc1Nzc0LCJ1c2VyX2lkIjoiQndscGUyTURLcWIzQXJ3Z1hPMzFFUG11NEZKMiIsInN1YiI6IkJ3bHBlMk1ES3FiM0Fyd2dYTzMxRVBtdTRGSjIiLCJpYXQiOjE2OTEzNzU3NzQsImV4cCI6MTY5MTM3OTM3NCwiZW1haWwiOiJhZG1pbkBnbWFpbC5jb20iLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiYWRtaW5AZ21haWwuY29tIl19LCJzaWduX2luX3Byb3ZpZGVyIjoicGFzc3dvcmQifX0.PgnDzxRKF2_DsvzlV-wUOnTmbkumXGS8Eo5Sd1B5IPS3BOQHAvl-Uf6DAgpyZb2guTfXmY-CaeIu5zHLUKLvZQxh7b1vt80DgvSY0qs9FQZeOMlEBvufJosv8t-wAvvRd8DcU1LytJTS8bddgRxFZSwzx-o85-p-y2j5YS-cBIy9riEjLc9ZEKHaOI3b5OlGB7ATdEhXLU35-lObTlKMywx0n5azi7tCqACrJB2gZClUspOqgZEc9BqRzA0fUi5hQJDC1SQ52wVbFWd82Mo3XihUIV8MuFRstR3HF7ijm8ydJdn-SYvkseg3Z25tkv2yiJsWawWJlmdefjbVIDEUZQ"
            const token = "eyJhbGciOiJSUzI1NiIsImtpZCI6IjYyM2YzNmM4MTZlZTNkZWQ2YzU0NTkyZTM4ZGFlZjcyZjE1YTBmMTMiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vZmlyLWxvZ2luLWQyMTJkIiwiYXVkIjoiZmlyLWxvZ2luLWQyMTJkIiwiYXV0aF90aW1lIjoxNjkxMzgyODk4LCJ1c2VyX2lkIjoiQndscGUyTURLcWIzQXJ3Z1hPMzFFUG11NEZKMiIsInN1YiI6IkJ3bHBlMk1ES3FiM0Fyd2dYTzMxRVBtdTRGSjIiLCJpYXQiOjE2OTEzODI4OTgsImV4cCI6MTY5MTM4NjQ5OCwiZW1haWwiOiJhZG1pbkBnbWFpbC5jb20iLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiYWRtaW5AZ21haWwuY29tIl19LCJzaWduX2luX3Byb3ZpZGVyIjoicGFzc3dvcmQifX0.IT1H9dq9oiUjYDxg_WItvlNIpLd4FqT34cQeEdeabVMWtR0YzegWFJYlHOESHbuzTzRp-E3gD-sIJetN9EVYm4-8PIbaoIGwN54d1MciTRQE_YhxeNMvv0LHxtxhJPWwJ4ZjBdovgdbza9yuRmKT8F9iUYC_VKmQRQzxDMvg_FjK4P48TgfkgDHFZWMgORbYrCPmSRYYuJ5cJUNOTY5WKe1zQK9W1tMrCH7cGUbi97L2mDPhfKFgHLU-W5fSrXaKAGqzkJ0ttXUdUfkn-SxnLsNAyrNmkbrSW-DzlzXomaGpvVWgu2KHB6JD4lC2syi7ust1Wa_h3KxT0b1G9nLaPg"
            const API_POST = `posts.json?auth=${token}`;
            const payload = {
                title: this.title,
                content: this.content,
            }
            this.$api.$post(API_POST, payload);
            // const result = await fetch(API_POST, {
            //     method: 'POST',
            //     body: JSON.stringify(payload),
            // }).then(async (res) => {
            //     const x = await res.json();
            //     console.log('success: ', x);
            // });
        },
    },
}

// {
//     "kind": "identitytoolkit#VerifyPasswordResponse",
//     "localId": "Bwlpe2MDKqb3ArwgXO31EPmu4FJ2",
//     "email": "admin@gmail.com",
//     "displayName": "",
//     "idToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6IjYyM2YzNmM4MTZlZTNkZWQ2YzU0NTkyZTM4ZGFlZjcyZjE1YTBmMTMiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vZmlyLWxvZ2luLWQyMTJkIiwiYXVkIjoiZmlyLWxvZ2luLWQyMTJkIiwiYXV0aF90aW1lIjoxNjkxMzgyODk4LCJ1c2VyX2lkIjoiQndscGUyTURLcWIzQXJ3Z1hPMzFFUG11NEZKMiIsInN1YiI6IkJ3bHBlMk1ES3FiM0Fyd2dYTzMxRVBtdTRGSjIiLCJpYXQiOjE2OTEzODI4OTgsImV4cCI6MTY5MTM4NjQ5OCwiZW1haWwiOiJhZG1pbkBnbWFpbC5jb20iLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiYWRtaW5AZ21haWwuY29tIl19LCJzaWduX2luX3Byb3ZpZGVyIjoicGFzc3dvcmQifX0.IT1H9dq9oiUjYDxg_WItvlNIpLd4FqT34cQeEdeabVMWtR0YzegWFJYlHOESHbuzTzRp-E3gD-sIJetN9EVYm4-8PIbaoIGwN54d1MciTRQE_YhxeNMvv0LHxtxhJPWwJ4ZjBdovgdbza9yuRmKT8F9iUYC_VKmQRQzxDMvg_FjK4P48TgfkgDHFZWMgORbYrCPmSRYYuJ5cJUNOTY5WKe1zQK9W1tMrCH7cGUbi97L2mDPhfKFgHLU-W5fSrXaKAGqzkJ0ttXUdUfkn-SxnLsNAyrNmkbrSW-DzlzXomaGpvVWgu2KHB6JD4lC2syi7ust1Wa_h3KxT0b1G9nLaPg",
//     "registered": true,
//     "refreshToken": "AMf-vBw4PtKPGkmtKpImiOLqnfkPknyr7eHQX22uPmTJdgnUzQFQX4AVaHsVgETfICAoa5CXBL_psTITg3hTmdEYgdPNnl-E8nPPu7maVR0hAEqD1p0JswTL17fjyJPczFd9NTOvBx__VJJnyToheHiBz0hCLNZYnmAwsjSnD594F2Fh8RyfJdhYqMZ50AcwXeW9cXi2AekyrVv2Y_vwTx8UqDAcMdo9gw",
//     "expiresIn": "3600"
// }
</script>

<style lang="scss" scoped></style>
