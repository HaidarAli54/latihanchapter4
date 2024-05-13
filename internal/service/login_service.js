//ngambil request dengan data email, password 
//cek data didatabase apakah ada data dengan email tersebut --repo
//jika tidak ada maka akan mengirimkan pesan error email tidak ditemukan
//jika data ada maka akan cek password yang dikirim oleh user apakah sama dengan password yang ada di database
//jika tidak sama maka akan mengirimkan pesan error password salah
//jika passoword sama, maka akan mengirimkan pesan login success

const LoginRepository = require('../repository/login_repository')

class LoginService{
    async login(email, password) {
        
        const loginRepo = new LoginRepository()

        const dataUser = await loginRepo.GetDataByEmail(email)
        if(!dataUser) {
                throw new Error('email tidak ditemukan');
        }
        
       
    }
}