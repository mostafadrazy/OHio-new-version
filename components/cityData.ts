export interface CityData {
    name: string;
    slug: string;
    heroImage: string;
    intro: string;
    description: string;
    areas: string[];
    stats: {
        familiesHelped: string;
        avgTime: string;
        cashInvested: string;
    };
    phone: string;
}

export const cityData: Record<string, CityData> = {
    dayton: {
        name: "Dayton",
        slug: "sell-my-house-dayton",
        heroImage: "https://images.unsplash.com/photo-1628116904246-13d8d6411516?q=80&w=2070&auto=format&fit=crop",
        intro: "The fastest way to sell your house in the Gem City. No realtors, no repairs.",
        description: "Dayton's market is unique, ranging from historic homes in the Oregon District to post-war builds in Kettering. We understand the specific challenges of maintaining older Ohio homes. Whether you're dealing with a foreclosure in Huber Heights or an inherited property in Centerville, we provide a guaranteed cash exit strategy.",
        areas: ["Oregon District", "South Park", "Kettering", "Oakwood", "Beavercreek", "Huber Heights", "Centerville", "Miamisburg", "Riverside", "Trotwood"],
        stats: {
            familiesHelped: "300+",
            avgTime: "14 Days",
            cashInvested: "$12M+"
        },
        phone: "(937) 555-0123" // Example local number if you had one, otherwise use main
    },
    cincinnati: {
        name: "Cincinnati",
        slug: "sell-my-house-cincinnati",
        heroImage: "https://images.unsplash.com/photo-1596236979201-9a70716c5b08?q=80&w=2070&auto=format&fit=crop",
        intro: "Sell your Cincinnati home without the MLS headaches. Zero commissions.",
        description: "From the hills of Mount Adams to the streets of Westwood, Cincinnati real estate moves fast, but traditional listings can drag on. We offer Queen City homeowners a private, direct-sale alternative. Skip the open houses and sell your property as-is, regardless of condition.",
        areas: ["Over-the-Rhine", "Hyde Park", "Mount Adams", "Westwood", "Oakley", "Pleasant Ridge", "College Hill", "Anderson Township", "Blue Ash", "Norwood"],
        stats: {
            familiesHelped: "150+",
            avgTime: "12 Days",
            cashInvested: "$8M+"
        },
        phone: "(513) 555-0123"
    },
    cleveland: {
        name: "Cleveland",
        slug: "sell-my-house-cleveland",
        heroImage: "https://images.unsplash.com/photo-1510673397446-5926c459f0f9?q=80&w=2070&auto=format&fit=crop",
        intro: "Fair cash offers for Cleveland properties. Any condition, any situation.",
        description: "Cleveland's revitalization is underway, but selling a distressed property on the open market is still costly. Whether you have a rental in Lakewood or a family home in Parma, Essa Estates removes the friction. We cover all closing costs and handle the paperwork locally.",
        areas: ["Ohio City", "Tremont", "Lakewood", "Parma", "Cleveland Heights", "Euclid", "Shaker Heights", "Solon", "Strongsville", "Westlake"],
        stats: {
            familiesHelped: "120+",
            avgTime: "15 Days",
            cashInvested: "$5M+"
        },
        phone: "(216) 555-0123"
    },
    columbus: {
        name: "Columbus",
        slug: "sell-my-house-columbus",
        heroImage: "https://images.unsplash.com/photo-1590740649716-1f92e5954602?q=80&w=2070&auto=format&fit=crop",
        intro: "Sell your home in Ohio's capital fast. No fees, just funds.",
        description: "As Columbus grows, so does the complexity of selling. Don't get lost in the shuffle of high-speed gentrification. We provide a personalized, human approach to selling your home in Franklin County. We buy houses in Short North, German Village, and beyond with a simple cash transaction.",
        areas: ["Short North", "German Village", "Dublin", "Westerville", "Hilliard", "Grove City", "Gahanna", "Reynoldsburg", "Clintonville", "Bexley"],
        stats: {
            familiesHelped: "200+",
            avgTime: "10 Days",
            cashInvested: "$9M+"
        },
        phone: "(614) 555-0123"
    }
};