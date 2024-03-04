const print = document.getElementById('post-section')
const special = document.getElementById('press')
const loading = document.getElementById('loader')
const latest_card = document.getElementById('latest_card')
const search = document.getElementById('search')
let wait = 0 
loading.classList.remove('hidden')
const post = async() =>{
    const req = await fetch('https://openapi.programming-hero.com/api/retro-forum/posts')
    const data = await req.json()
    const records = data.posts
    records.forEach(record => {
        const title = record.title
        const div = document.createElement('div')
        div.classList.add('mt-4')
        let stringWithoutSingleQuotes = record.title.replace(/'/g, '_');
        div.innerHTML = `<div class="flex gap-6 items-start  bg-[#F3F3F5] p-10 rounded-3xl">
        <div class="indicator">
            <span class="indicator-item badge  bg-green-600" id = "my-color"></span> 
            <div class="avatar">
                <div class="w-[72px] h-[72px] rounded-2xl">
                  <img src="${record.image}" />
                </div>
              </div>
          </div>
          <div>
            <span class="font-medium text-[14px] text-[#12132DCC] mr-4">#${record.category}</span>
            <span class="font-medium text-[14px] text-[#12132DCC] mr-4">#${record.author.name}</span>
            <h2 class="text-[#12132D] font-bold text-xl">${record.title}</h2>
            <p class="w-[596px] font-normal text-[#12132D99] mt-4">${record.description}</p>
            <hr class="my-5 border-1 border-dashed border-[#12132D40]">
            <div class="flex justify-between">
                <div class="flex gap-7 text-[#12132D99] text-[16px] font-normal">
                    <span><i class="fa-regular fa-comment-dots mr-4"></i>${record.comment_count}</span>
                    <span><i class="fa-regular fa-eye mr-4"></i>${record.view_count}</span>
                    <span><i class="fa-regular fa-clock mr-4"></i>${record.posted_time} min</span>
                </div>
                <div>
                    <span class="text-white cursor-pointer"><i class="fa-solid fa-envelope-open w-7 h-7 rounded-full bg-green-400 flex justify-center items-center" onclick ="hello('${stringWithoutSingleQuotes}',${record.view_count})" ></i></span>
                </div>
            </div>
          </div>
        </div>`
        loading.classList.add('hidden')
        print.appendChild(div)
        
    }); 
}

const latest = async ()=>{
   let  author = ''
   let date = ''
   const ro = await fetch('https://openapi.programming-hero.com/api/retro-forum/latest-posts')
   const data = await ro.json()
   data.forEach(datas =>{
    if(typeof(datas.author.designation) === "undefined"){
        author = 'unknown'
    }
    else{
        author = datas.author.designation
    }
    if(typeof(datas.author.posted_date)=== 'undefined'){
        date = 'no publish date'
    }
    else{
        date = datas.author.posted_date
    }
    const div = document.createElement('div')
    div.innerHTML=`<div class="latest-post mt-12 flex gap-6" id = 'latest_card'>
    <div class="card  bg-base-100 border border-solid border-[#12132D26] py-6">
        <figure class="px-6">
          <img src="${datas.cover_image}" alt="Shoes" class="rounded-xl" />
        </figure>
        <div class="px-6 mt-[25px]">
          <span class="text-[#12132D99] text-[16px] font-normal"><i class="fa-regular fa-calendar mr-2"></i>${date}</span>
          <h2 class="font-extrabold mt-4 text-[16px]">${datas.title}</h2>
          <p class="mt-3 text-[#12132D99] font-normal text-[16px]">${datas.description}</p>
          <div class="flex mt-4 gap-4">
            <div class="indicator">
                <div class="avatar">
                    <div class="w-[44px] h-[44px] rounded-full">
                      <img src="${datas.profile_image}" />
                    </div>
                  </div>
              </div>
              <div>
                <h2 class="text-[#12132D] font-bold">${datas.author.name}</h2>
                <p class="text-[#12132D99] font-normal text-[16px]">${author}</p>
              </div>
          </div>
        </div>
      </div>
</div>`
latest_card.appendChild(div)
   })
} 
 
function hello(wr,lo){
    wait++
    const x = document.getElementById('wait')
    x.innerHTML = wait
   const er = document.createElement('div')
   er.classList.add('flex', 'bg-white', 'p-4', 'gap-2', 'rounded-2xl', 'items-center', 'mt-4');
   er.innerHTML = `<h2 class="text-[#12132D] font-semibold text-xl w-[212px]">${wr}</h2>
   <span class="text-[#12132D99]"><i class="fa-regular fa-eye mr-2 "></i>${lo}</span>`
   special.appendChild(er)
}
search_key = async()=>{
    // loading.classList.remove('hidden')
    const text = search.value
    const war = await fetch(`https://openapi.programming-hero.com/api/retro-forum/posts?category=${text}`)
    const we = await war.json()
    const post = we.posts
    
    print.innerHTML = ''
    post.forEach(record=>{
      const title = record.title
        const div = document.createElement('div')
        div.classList.add('mt-4')
        let stringWithoutSingleQuotes = record.title.replace(/'/g, '_');
        div.innerHTML = `<div class="flex gap-6 items-start  bg-[#F3F3F5] p-10 rounded-3xl">
        <div class="indicator">
            <span class="indicator-item badge  bg-green-600" id = "my-color"></span> 
            <div class="avatar">
                <div class="w-[72px] h-[72px] rounded-2xl">
                  <img src="${record.image}" />
                </div>
              </div>
          </div>
          <div>
            <span class="font-medium text-[14px] text-[#12132DCC] mr-4">#${record.category}</span>
            <span class="font-medium text-[14px] text-[#12132DCC] mr-4">#${record.author.name}</span>
            <h2 class="text-[#12132D] font-bold text-xl">${record.title}</h2>
            <p class="w-[596px] font-normal text-[#12132D99] mt-4">${record.description}</p>
            <hr class="my-5 border-1 border-dashed border-[#12132D40]">
            <div class="flex justify-between">
                <div class="flex gap-7 text-[#12132D99] text-[16px] font-normal">
                    <span><i class="fa-regular fa-comment-dots mr-4"></i>${record.comment_count}</span>
                    <span><i class="fa-regular fa-eye mr-4"></i>${record.view_count}</span>
                    <span><i class="fa-regular fa-clock mr-4"></i>${record.posted_time} min</span>
                </div>
                <div>
                    <span class="text-white cursor-pointer"><i class="fa-solid fa-envelope-open w-7 h-7 rounded-full bg-green-400 flex justify-center items-center" onclick ="hello('${stringWithoutSingleQuotes}',${record.view_count})" ></i></span>
                </div>
            </div>
          </div>
        </div>`
        loading.classList.remove('hidden')
        setTimeout(()=>{
          print.appendChild(div)
        },2000)
        setTimeout(()=>{
          loading.classList.add('hidden')
        },2000)
        
    })
    
}



setTimeout(()=>{
  post()
  
},2000)
latest()
