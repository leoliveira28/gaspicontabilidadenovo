// Script para gerar hash de senha para o admin
// Uso: node scripts/generate-password-hash.js sua-senha-aqui

const bcrypt = require('bcryptjs')

const password = process.argv[2]

if (!password) {
  console.log('❌ Por favor, forneça uma senha')
  console.log('Uso: node scripts/generate-password-hash.js sua-senha-aqui')
  process.exit(1)
}

const saltRounds = 10
const hash = bcrypt.hashSync(password, saltRounds)

console.log('\n✅ Hash gerado com sucesso!\n')
console.log('Copie o hash abaixo e cole no arquivo .env.local na variável ADMIN_PASSWORD_HASH:\n')
console.log(hash)
console.log('\nExemplo no .env.local:')
console.log(`ADMIN_PASSWORD_HASH=${hash}\n`)
