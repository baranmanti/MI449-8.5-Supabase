import { createClient } from "https://cdn.skypack.dev/@supabase/supabase-js@2.7.1"

const supabaseUrl = 'https://krnsrmjmwjjkiuvefcfl.supabase.co'

const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtybnNybWptd2pqa2l1dmVmY2ZsIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzYyMjUyMjksImV4cCI6MTk5MTgwMTIyOX0.NBm7GZTWc53w_saT4ppIp-_RU-neUt1z7Ftf27AFPiI'

const supabase = createClient(supabaseUrl, supabaseKey)

async function getBooks() {
  let { data: books, error } = await supabase
    .from('books')
    .select('*')

  for (let book of books) {
     let bookList = document.getElementById('books');
     bookList.innerHTML += `<tr><td>${book.title}</td><td>${book.author}</td></tr>`;
   }
}

getBooks();