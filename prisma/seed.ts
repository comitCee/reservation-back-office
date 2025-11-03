import { PrismaClient } from './generated/client'
import bcrypt from "bcryptjs"

const prisma = new PrismaClient()

async function main() {
    console.log("🌱 Starting seed...")

    // Hash le mot de passe
    const hashedPassword = await bcrypt.hash("Passer123", 10)

    // Créer ou mettre à jour l'utilisateur admin
    const admin = await prisma.user.upsert({
        where: { email: "goldlif94@gmail.com" },
        update: {},
        create: {
            name: "Salif Biaye",
            email: "goldlif94@gmail.com",
            emailVerified: true,
            role: "ADMIN",
            accounts: {
                create: {
                    accountId: "admin-account",
                    providerId: "credential",
                    password: hashedPassword,
                }
            }
        },
    })

    console.log("✅ Admin user created:", {
        id: admin.id,
        name: admin.name,
        email: admin.email,
        role: admin.role,
    })

    console.log("\n📧 Credentials:")
    console.log("Email: salif.biaye@example.com")
    console.log("Password: Passer123")
}

main()
    .catch((e) => {
        console.error("❌ Error during seed:", e)
        process.exit(1)
    })
    .finally(async () => {
        await prisma.$disconnect()
    })