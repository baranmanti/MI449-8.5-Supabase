import { createClient } from "https://cdn.skypack.dev/@supabase/supabase-js@2.7.1"

const supabaseUrl = 'https://yqsxxtmoimvjhrkuvszc.supabase.co'

const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inlxc3h4dG1vaW12amhya3V2c3pjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTA2OTQxNTEsImV4cCI6MjAyNjI3MDE1MX0.8Ffv2iOgH6u9x2Kp4qmnJHMhaUtQUkqAbdP_MDG1Uro'

const supabase = createClient(supabaseUrl, supabaseKey)

async function getBooks()
{
  let { data: books, error } = await supabase
    .from('books')
    .select('*')

  let bookList = document.getElementById('books');
  bookList.innerHTML += `<tr class="header"><td>Title</td><td>Author</td><td>ISBN</td></tr>`;
  for (let book of books)
  {
    bookList.innerHTML += `<tr><td>${book.title}</td><td>${book.author}</td><td>${book.ISBN}</td></tr>`;
  }
}

getBooks();