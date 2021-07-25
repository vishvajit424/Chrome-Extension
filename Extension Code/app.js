
 fetch('https://www.trickyenough.com/wp-json/chrome-extension/latest-posts/')
                .then(response => response.json())
                .then(posts => {
                    let output = '<h2 align="center">Latest Posts</h2>';
                    output += '<ul class="posts">';
                    posts.forEach(function(posts) {
                        output += `
                            <li><a href="${posts.links}" target="_blank">
                                ${posts.title}
                                </a>
                            </li>
                        `;
                    });
                    output += '</ul>'
                    document.getElementById("latestposts").innerHTML = output;
                });

// async function getUsers() {

//     let url = 'https://www.trickyenough.com/wp-json/chrome-extension/latest-posts/';
//     try {
//         let res = await fetch(url);
//         return await res.json();
//     } catch (error) {
//         console.log(error);
//     }
// }
// async function renderUsers() {
//     let post = await getUsers();
//     let html = '';
//     post.forEach(post => {
//         let htmlSegment = `<li>${post.title}</li>`;

//         html += htmlSegment;
//     });
//    //alert( html);
//     document.getElementById('latestposts').innerHTML = html;
// }

// renderUsers();