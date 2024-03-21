1. Perhatikan code berikut!
/*
    <button id='btn1' onClick={onSubmit}>Submit</button>
    <button id='btn2' onClick={(event) => onSubmit(event)}>Submit</button>
*/
Apakah perbedaan dari kedua button di atas?
a. 'btn1' tidak memiliki akses ke property event saat button di klik
b. Tidak ada perbedaan
c. 'btn1' tidak dapat memanggil function onSubmit dengan baik
d. 'btn2' tidak dapat memanggil function onSubmit dengan baik



2. Perhatikan code berikut ini!
/*
    export default function Profile(){
        return(
            <ProfileCard 
                data={{
                    username: 'ryandefryan',
                    fullName: 'M Defryan'
                }} 
                className='bg-blue-500' />
        )
    }

    export default function ProfileCard(props){
        return(
            <ProfileField {...props} />
        )
    }
*/
Props apa sajakah yang akan dikirim menuju component ProfileField?
a. Semua props
b. Semua props yang mengalami perubahan
c. Semua props yang tidak mengalami perubahan
d. Semua props dari child



3. Bagaimana bisa kita mengganti apa yang ditampilkan oleh sebuah component di ReactJS?
a. Tidak bisa, karena component di React bersifat statis
b. Membuat sebuah state yang dapat diubah, kemudian tampilkan state tersebut
   di dalam component React
c. Membuat sebuah variable yang dapat diubah, kemudian tampilkan variable
   tersebut di dalam component React
d. Melakukan setItem di dalam localStorage dan getItem valuenya di component React



5. Perhatikan code berikut!
/*
export default function Sidebar(){
    const category = ["Drink", "Food", "Snack"]

    const mapCategory = () => {
        return category.map((item, idx) => {
            return(
                <div key={idx}>
                    {item}
                </div>
            ) 
        })
    }

    return(
        <>
            {mapCategory()}
        </>
    )
}
*/
Apakah ada kesalahan dalam pembuatan component sidebar di atas?
a. Tidak ada
b. Ada! Karena function mapCategory berusaha me-render 'category' yang bukan merupakan sebuah state
c. Ada! Function mapCategory tidak akan menghasilkan apapun, karena tidak ada event listener yang memanggil
   function tersebut
d. Ada! Karena method .map di dalam function mapCategory tidak menggunakan parameter value dan index



6. Mengapa kita membutuhkan redux ketimbang local state di dalam project React?
a. Untuk me-manage state yang lebih kompleks
b. Untuk meningkatkan performa aplikasi ReactJS agar lebih baik
c. Untuk menyimpan data secara permanen
d. Untuk menyiapkan sebuah production app



7. Perhatikan code berikut!
<Route path='/:productId' />
:productId disebut dengan?
a. Rute param
b. Route params
c. Route parameter
d. Route query




10. Berikut ini manakah library yang harus kita install ketika ingin melakukan http method di dalam 
    project React? 
a. fetch
b. axios
c. redux
d. zustand



11. Pada proses development, berapakah default port project React Vite pada saat dijalankan?
a. 3000
b. 3001
c. 4173
d. 5173



12. Fitur manakah yang dapat menyimpan data secara permanen di sisi client/frontend?
a. Session storage
b. Local storage
c. Cookies
d. Local state



13. Berikut ini manakah urutan lifecycle method di dalam component React?
a. Component Did Mount > Render/Return > Component Did Update > Component Will Unmount
b. Render/Return > Component Did Update > Component Did Mount > Component Will Unmount
c. Render/Return > Component Did Mount > Component Did Update > Component Will Unmount
d. Semua jawaban salah



14. Bagaimana cara passing data antara component parent ke child didalam ReactJS?
a. Menggunakan sebuah state global yang dapat diakses oleh semua component
b. Menggunakan local state di dalam sebuah component
c. Menggunakan sebuah attribute custom yang bernama props
d. Menggunakan sebuah object data



15. Bagaimana cara menulisakan inline-style untuk font-size:12px dan color:red
a. style={{font-size:12,color:'red'}}  
b. style={{fontSize:"12px",color:'red'}} 
c. style={fontSize:"12px",color:'red'} 
d. style={{font-size:12px,color:'red'}}  



16. Jika ingin membuat beberapa component ReactJS pada flex-box sejajar kesamping dan urutannya dibalik, attribute manakah 
    yang kita digunakan ?
a. flex-wrap = "nowrap"
b. flexDirection = "column-reverse"
c. flexDirection = "reverse"
d. flexDirection = "row-reverse"



17. Berikut ini element HTML manakah yang memiliki default display block?
a. h5
b. span
c. input
d. button