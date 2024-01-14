import axios from "axios";

const BASE_URL = "https://www.googleapis.com/customsearch/v1";

// AIzaSyDTF_3AdCUDxI3Gu3nxutdKsmCQj89hiQY

{/* <script async src="https://cse.google.com/cse.js?cx=744ea329124e045bd">
</script>
<div class="gcse-search"></div> */}

const params = {
    key: "AIzaSyDTF_3AdCUDxI3Gu3nxutdKsmCQj89hiQY",
    cx: "744ea329124e045bd",
};

export const fetchDataFromApi = async (payload) => {
    const { data } = await axios.get(BASE_URL, {
        params: { ...params, ...payload },
    });
    return data;
};