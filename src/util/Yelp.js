const apiKey = 'rWU3A72CdrtRrmK5ynOBAo62UGzrW_A1ipXAMj-aComSvagwi6-nL48kf8aITGZdfdPqmk9UrvJmvAUt1PwDtF7aGq0rtEQkQLy6jPeZ4_rm7xa-ARe0XfONsGZuXnYx';

const Yelp = {
    search(term, location, sortBy){
        return fetch(
            `https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`,
            { 
                headers: {
                    Authorization: `Bearer ${apiKey}`
                }
            }
            )
            .then(Response => Response.json())
            .then(jsonResponse => {
                if (jsonResponse.businesses) {
                    return jsonResponse.businesses.map( business => {
                        return {
                            id: business.id,
                            imageSrc: business.image_url,
                            name: business.name,
                            address: business.location.address1,
                            city: business.location.city,
                            state: business.location.state,
                            zipCode: business.location.zip_code,
                            category: business.categories.title,
                            rating: business.rating,
                            reviewCount: business.review_count
                        }
                    })
                }
            });
    }
}

export default Yelp;