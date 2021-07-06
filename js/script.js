var app = new Vue({
    el: '#app',
    data: {
        jobs: [
            {
                id: 1,
                company: 'Perferendis',
                position: 'Developer',
                description: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure veniam similique adipisci! Perferendis odio sapiente libero quam deleniti quidem consequuntur adipisci minima non iusto, sunt optio hic. Corporis, laboriosam perferendis?',
                created_at: '5/22/2021',
                logo: 'logo.jpg',
                city: 'Roma',
                contract: 'Full Time'
            },
            {
                id: 2,
                company: 'Creem',
                position: 'Icecreem producer',
                description: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure veniam similique adipisci! Perferendis odio sapiente libero quam deleniti quidem consequuntur adipisci minima non iusto, sunt optio hic. Corporis, laboriosam perferendis?',
                created_at: '5/22/2021',
                logo: 'logo-1.jpg',
                city: 'Napoli',
                contract: 'Full Time'
            },
            {
                id: 3,
                company: 'Chicco',
                position: 'Callcenter',
                description: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure veniam similique adipisci! Perferendis odio sapiente libero quam deleniti quidem consequuntur adipisci minima non iusto, sunt optio hic. Corporis, laboriosam perferendis?',
                created_at: '5/22/2021',
                logo: 'logo.jpg',
                city: 'Perugia',
                contract: 'Part Time'
            },
            {
                id: 4,
                company: 'Google',
                position: 'Developer',
                description: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure veniam similique adipisci! Perferendis odio sapiente libero quam deleniti quidem consequuntur adipisci minima non iusto, sunt optio hic. Corporis, laboriosam perferendis?',
                created_at: '5/22/2021',
                logo: 'logo.jpg',
                city: 'Milano',
                contract: 'Part Time'
            },
            {
                id: 5,
                company: 'The Hell',
                position: 'Cook',
                description: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure veniam similique adipisci! Perferendis odio sapiente libero quam deleniti quidem consequuntur adipisci minima non iusto, sunt optio hic. Corporis, laboriosam perferendis?',
                created_at: '5/22/2021',
                logo: 'logo.jpg',
                city: 'Bologna',
                contract: 'Full Time'
            },

        ],
        starred: [1, 3],
        applied: [4, 5]

    },
    methods: {
        favorite: function (id) {
            this.starred.push(id)
        },
        notFavorite: function (id) {
            let index = this.starred.indexOf(id)
            this.starred.splice(index, 1)
        }
    }
})