const Database = require('./db');
const saveOrphanage = require('./saveOrphanage');

Database.then(async db => {
    // await saveOrphanage(db, {
    //     lat: "-27.232633",
    //     lng: "-49.6545874",
    //     name: "Lar doce lar",
    //     about: "Presta assistência a crianças de 06 a 15 anos que se encontre em situação de risco e/ou vulnerabilidade social.",
    //     whatsapp: "79981940235",
    //     images: [
    //         "https://images.unsplash.com/photo-1573924436756-128cf1f6387a?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",
    //         "https://images.unsplash.com/photo-1601565812491-fed7af6905f2?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max"
    //     ].toString(),
    //     instructions: "Venha como se sentir a vontade e traga muito amor e paciência para dar.",
    //     opening_hours: "Horários de visitas das 20h até 10h",
    //     open_on_weekends: "0"
    // })
    
    const selectedOrphanages = await db.all("SELECT * FROM orphanages")
    console.log(selectedOrphanages)

    // const orphanage = await db.all('SELECT * FROM orphanages WHERE id = "1"')
    // console.log(orphanage)

    // // deletar dado da tabela
    // await db.run("DELETE FROM orphanages WHERE id = '3'")
    // await db.run("DELETE FROM orphanages WHERE id = '5'")
    // await db.run("DELETE FROM orphanages WHERE id = '6'")
})