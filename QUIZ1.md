


1. Teknologi yang biasanya digunakan untuk mendefinisikan struktur dan konten dari halaman web adalah?
a. ReactJS
x. HTML
c. CSS
d. Javascript

2. Apa yang biasanya digunakan untuk memberikan interaksi pada halaman web?
x. Javascript
b. HTML5
c. CSS
d. Tailwind CSS

3. Apakah yang dimaksud dengan "pseudo-element" dalam CSS, dan bagaimana cara mereka digunakan?
x. Pseudo-element adalah elemen yang muncul setelah elemen yang dipilih dalam CSS dan digunakan untuk styling spesifik.
b. Pseudo-element adalah elemen yang hanya muncul setelah elemen di hover, dan efek aktif pada elemen tersebut.
c. Pseudo-element adalah elemen yang hanya dapat diakses melalui JavaScript.
d. Tidak ada jawaban yang benar

4. Apa yang dimaksud dengan "CSS Flexbox" dan bagaimana cara digunakannya untuk mengatur tata letak elemen dalam halaman web?
x. CSS Flexbox adalah metode untuk mengatur tata letak elemen dalam satu dimensi (baris atau kolom) secara fleksibel.
b. CSS Flexbox adalah metode yang digunakan untuk memvalidasi form pada CSS.
c. CSS Flexbox adalah metode untuk mengatur gambar latar belakang dalam elemen HTML.
d. CSS Flexbox adalah metode untuk mengatur tata letak posisi element seperti fixed, sticky, dan absolute

5. Bagaimana Anda membuat komponen baru dalam React?
a. Dengan menggunakan `new Component()` di dalam fungsi `render`.
b. Dengan menambahkan metode `createComponent()` dalam komponen yang ada.
x. Dengan membuat file JavaScript baru dan menuliskan kode JSX untuk komponen tersebut.
d. Dengan menambahkan elemen HTML baru dalam file HTML yang menggambarkan komponen.

6. Apa yang dimaksud dengan "props drilling" dalam konteks React?
a. Props drilling adalah teknik atau metode untuk membuat props dalam React.
b. Props drilling adalah cara untuk mengatur prop data secara teratur dan efisien.
x. Props drilling adalah proses mengirimkan data props melalui beberapa lapisan komponen, yang dapat membuat kode menjadi tidak efisien.
d. Props drilling adalah metode untuk melakukan parsing props dari dalam komponen child kepada komponen parent pada React sehingga membuat kode lebih efisien.

7. Tools apa yang digunakan oleh React untuk mengkompilasi JSX?
a. Toastify
b. Redux
c. Axios
x. Babel

8. Bagaimana Anda menggunakan useMemo dalam React untuk mengoptimalkan kinerja komponen yang mengambil data dari API eksternal?
x. useMemo digunakan untuk menghindari pengambilan ulang data dari API setiap kali komponen dirender ulang.
b. useMemo digunakan untuk mengambil data dari API setiap kali komponen dirender ulang secara efisien.
c. useMemo digunakan untuk mengatur tampilan komponen React.
d. useMemo tidak dapat digunakan untuk mengoptimalkan pengambilan data dari API.

9. Apa yang dimaksud dengan "Virtual DOM" dalam konteks React?
a. Sebuah elemen DOM yang digunakan untuk merender komponen dalam React.
x. Sebuah representasi sementara dari struktur DOM aktual yang digunakan oleh React untuk meningkatkan kinerja pembaruan tampilan.
c. Sebuah library dari JavaScript yang digunakan untuk memudahkan membuat interaksi berupa animasi virtual dalam React.
d. Sebuah jenis komponen dalam React yang digunakan untuk menggantikan struktur dalam bentuk komponen fungsional.

10. Apa yang dimaksud dengan Server-Side Rendering (SSR) dalam React, dan apa manfaatnya?
a. SSR adalah metode untuk mengatur state global dalam React.
x. SSR adalah metode untuk merender tampilan di sisi server sebelum dikirim ke klien, yang memungkinkan aplikasi lebih cepat dimuat dan SEO lebih baik.
c. SSR adalah metode untuk merender tampilan hanya di sisi klien sebelum dikirim ke server, yang memungkinkan aplikasi lebih cepat dimuat dan SEO lebih baik.
d. SSR adalah metode untuk merender hanya tampilan animasi dalam React sebelum dikirim ke server, yang memungkinkan aplikasi lebih cepat dimuat dan SEO lebih baik.

11. Element manakah yang memiliki default display inline?
a. div
b. h6
x. em
d. hr

12. Apa yang akan terjadi apabila kita menyimpan data ke dalam variable,
   kemudian melakukan manipulasi pada variable tersebut?
a. Data didalam variable tidak akan berubah karena harus menggunakan state untuk menyimpan data
x. Data didalam variable berubah tetapi component tidak akan auto re-render
c. Data didalam variable berubah dan component akan auto re-render
d. Error, karena di React JS sudah memiliki fitur state untuk menyimpan data

13. Bagaimanakah cara meng-import file css dengan benar?
x. <link rel="stylesheet" type="text/css" href="externalStylesheet.css">
b. <link rel="stylesheet" type="text/css" src="externalStylesheet.css">
c. <stylesheet src="externalStylesheet.css"></stylesheet>
d. <stylesheet>externalStylesheet.css</stylesheet>

14. Berikut ini yang merupakan selector di dalam CSS, kecuali?
a. Tag selector
b. Class selector
c. Id selector
x. Element selector

15. Perhatikan code berikut!
/*
        const greeting = isLoggedIn? <Lists /> : null 
*/
Kapan component Lists akan tampil?
x. Ketika isLoggedIn bernilai true
b. Ketika user melakukan login
c. Ketika function Lists dipanggil
d. Tidak akan pernah tampil

16. Hooks apa yang digunakan untuk mendeklarasikan suatu local state 
    dan dapat memperbarui nilai state tersebut?
a. this.setState
x. useState
c. unitedState
d. useContext

17. Berikut ini macam-macam method/function di dalam React Hooks, kecuali?
a. useState 
b. useEffect
x. useLocation
d. useRef 

18. Cara menyimpan data pada state berikut didalam lifecycle method adalah?
/*
        function A(){
            const [data, setData] = useState([])
        }
*/
a. componentDidMount( ){ setData(["Budi", "Anton", "Firman"]) };
x. useEffect(( ) => setData(["Budi", "Anton", "Firman"]) );
c. componentDidMount( ){ this.setState({data: ["Budi", "Anton", "Firman"]}) };
d. useEffect(( ) => data(["Budi", "Anton", "Firman"]) )

19. Gambarkan hasil grid berikut!
/*
     <Grid
        h='200px'
        templateColumns='repeat(6, 1fr)'
        templateRows='repeat(3, 1fr)'
        gap={4}
    >
            <GridItem colSpan={2} bg='tomato' />
            <GridItem rowSpan={2} colSpan={4} bg='papayawhip' />
            <GridItem colSpan={5} bg='papayawhip' />
            <GridItem colSpan={3} bg='tomato' />
        </Grid>   
*/

20. Pernyataan yang paling tepat mengenai state yang ada di ReactJS, kecuali?
a. State digunakan untuk menyimpan data yang diambil dari API
b. State dapat menyimpan data bertipe array of object
x. State dapat menyimpan data secara permanen
d. State dapat dibuat didalam class component