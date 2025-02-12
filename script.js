const quotes = [
    { quote: "Kesuksesan adalah kemampuan untuk melewati dan mengatasi kegagalan demi kegagalan tanpa kehilangan semangat.", author: "Winston Churchill" },
    { quote: "Hidup ini sederhana, kita yang membuatnya rumit.", author: "Confucius" },
    { quote: "Kebahagiaan tidak datang dari apa yang kita dapatkan, tetapi dari apa yang kita berikan.", author: "Ben Carson" },
    { quote: "Hanya mereka yang berani gagal yang dapat mencapai keberhasilan besar.", author: "Robert F. Kennedy" },
    { quote: "Jika kamu menginginkan sesuatu yang belum pernah kamu miliki, kamu harus bersedia melakukan sesuatu yang belum pernah kamu lakukan.", author: "Thomas Jefferson" },
    { quote: "Jangan menunggu. Waktu tidak akan pernah tepat.", author: "Napoleon Hill" },
    { quote: "Do what you can, with what you have, where you are.", author: "Theodore Roosevelt" },
    { quote: "Kesalahan adalah bukti bahwa kamu sedang mencoba.", author: "Anonim" },
    { quote: "Mimpi tidak akan menjadi kenyataan melalui sihir; dibutuhkan kerja keras dan tekad.", author: "Colin Powell" },
    { quote: "Kunci untuk memulai adalah berhenti berbicara dan mulai melakukan.", author: "Walt Disney" },
    { quote: "The only limit to our realization of tomorrow is our doubts of today.", author: "Franklin D. Roosevelt" },
    { quote: "Orang bijak belajar ketika mereka bisa. Orang bodoh belajar ketika mereka terpaksa.", author: "Arthur Wellesley" },
    { quote: "Jangan takut gagal, takutlah untuk tidak mencoba.", author: "Anonim" },
    { quote: "Sukses bukanlah kunci kebahagiaan. Kebahagiaan adalah kunci sukses.", author: "Albert Schweitzer" },
    { quote: "Setiap hari adalah kesempatan kedua.", author: "Anonim" },
    { quote: "Keberanian adalah perlawanan terhadap ketakutan, bukan ketiadaan ketakutan.", author: "Mark Twain" },
    { quote: "Opportunities don't happen. You create them.", author: "Chris Grosser" },
    { quote: "Life is really simple, but we insist on making it complicated.", author: "Confucius" },
    { quote: "Keberhasilan bukanlah akhir, kegagalan bukanlah fatal: yang penting adalah keberanian untuk melanjutkan.", author: "Winston Churchill" },
    { quote: "The future depends on what you do today.", author: "Mahatma Gandhi" },
    { quote: "Tidak ada rahasia untuk sukses. Itu adalah hasil dari persiapan, kerja keras, dan belajar dari kegagalan.", author: "Colin Powell" },
    { quote: "Success is not in what you have, but who you are.", author: "Bo Bennett" },
    { quote: "Hidup adalah 10% apa yang terjadi pada kita dan 90% bagaimana kita meresponnya.", author: "Charles R. Swindoll" },
    { quote: "Kebahagiaan tidak ditemukan di luar diri kita, tetapi di dalam diri kita sendiri.", author: "Anonim" },
    { quote: "Believe you can and you're halfway there.", author: "Theodore Roosevelt" },
    { quote: "Orang yang tidak pernah membuat kesalahan adalah orang yang tidak pernah mencoba sesuatu yang baru.", author: "Albert Einstein" },
    { quote: "Work hard in silence, let success make the noise.", author: "Frank Ocean" },
    { quote: "Kesuksesan adalah perjalanan, bukan tujuan.", author: "Ben Sweetland" },
    { quote: "Jangan menunggu momen yang sempurna, ambil momen dan buatlah sempurna.", author: "Zoey Sayward" },
    { quote: "Sometimes later becomes never. Do it now.", author: "Anonim" }
  ];

const qoutes_box = document.getElementById('quote')
const author = document.getElementById('author')
const Get_new_quotes = document.getElementById('new-quote')

function Generate_quotes(){
    const randomIndex = Math.floor(Math.random() * quotes.length)
    const randomQuote = quotes[randomIndex];

    qoutes_box.textContent = `"${randomQuote.quote}"`;
    author.textContent = `- "${randomQuote.author}"`;
}

Get_new_quotes.addEventListener('click', Generate_quotes)

Generate_quotes()