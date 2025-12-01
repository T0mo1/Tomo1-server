import { prisma } from "../lib/prisma.js"

async function main() {
    // const user = await prisma.user.create({
    //     data: {
    //         id: 1,
    //         email: 'dev@gmail.com',
    //         password: 'test',
    //         firstName: 'John',
    //         lastName: 'Doe',
    //     },
    // })
    // console.log(user)

    const users = await prisma.user.findMany()
    console.log(users)
}

main()
    .then(async () => {
        await prisma.$disconnect()
    })
    .catch(async (e) => {
        console.error(e)
        await prisma.$disconnect()
        process.exit(1)
    })