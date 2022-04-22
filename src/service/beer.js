import { api } from './api'

export const getBeers = async (params) => {
    try {
        const res = await api.get(`/beers?page=${params}&per_page=8`);
        console.log(params, "asd")
        return res.data?.map(el => (
            {
                id: el.id,
                name: el.name,
                tagline: el.tagline,
                image: el.image_url,
                abv: el.abv,
            }
        ));
    }
    catch (err) {
        throw err;
    }
};
