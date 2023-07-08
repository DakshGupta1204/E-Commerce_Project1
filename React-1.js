function Navbar() {
    return (
        <div className="navbar--main">
            <div className="logo">
                <img src="https://img.icons8.com/?size=512&id=43s08h4rdYPW&format=png" className="site--logo" />
                <p className="company--name">WOLF</p>
            </div>
            <div className="navbar--search">
                <input type="text" placeholder="Search Wolf" className="searchbox" />
                <input type="submit" className="submit" />
            </div>
            <div className="navbar--account">
                <a href="http://127.0.0.1:5500/React_project1/login.html">
                    <p className="navbar--login">Login In</p>
                </a>
                <a href="http://127.0.0.1:5500/Front%20end/React_project1/login.html#">
                <p className="navbar--signin">Sign Up</p>
                </a>   
            </div>
        </div>
    )
}
function Event() {
    return (
        <div className="event">
            <span className="event--heading">Shopping Paradise</span>
            <div className="sale">
                <h2>BIGGEST SALE LIVE</h2>
            </div>
            <img src="https://img.freepik.com/free-psd/3d-background-with-emojis_23-2149986046.jpg?w=1380&t=st=1683120175~exp=1683120775~hmac=89880c378d0ec64c4f513230b2a6ea0e16e5ccdc11240adbfdd3b7755d62dea6" className="Big--Image" data-aos="fade-in" data-aos-delay="0" data-aos-duration="1000" />

        </div>
    )
}
window.addEventListener('scroll', () => {
    document.body.style.setProperty('--scroll', window.pageYOffset / (document.body.offsetHeight - window.innerHeight));
}, false)

const deals = {
    ImageURL: {
        Item1: "https://m.media-amazon.com/images/I/61lKQWyMdDL._SL1500_.jpg",
        Item2: "https://m.media-amazon.com/images/I/61Ghn2XKJoL._SX679_.jpg",
        Item3: "https://m.media-amazon.com/images/I/61gEpQCDUuL._UX695_.jpg",
        Item4: "https://m.media-amazon.com/images/I/61wUBsyfoYL._SX679_.jpg",

    },
    Name: {
        Item1: "Iphone  14 pro",
        Item2: "Razer Gaming Mouse",
        Item3: "Nike Jordan",
        Item4: "RenderEdge Gaming CPU",

    },
    Original_Price: {
        Item1: "₹140,000",
        Item2: "₹15,000",
        Item3: "₹65,000",
        Item4: "₹117,000",

    },
    Sale_Price: {
        Item1: "₹120,000",
        Item2: "₹13,999",
        Item3: "₹60,721.92",
        Item4: "₹64,990 ",

    }
}
function Deals(props) {
    return (
        <div>
            <h2 className="deals--heading">😍Top 5 Deals of the Day😍</h2>
            <div className="deal--items" id="q" data-aos="fade-in" data-aos-delay="1000">
                <img src={props.Image.Item1} />
                <h3>{props.Name.Item1}<br /></h3>
                <h4><span>{props.Old.Item1}</span> {props.New.Item1}</h4>
            </div>
            <div className="deal--items" id="w" data-aos="fade-in" data-aos-delay="1500">
                <img src={props.Image.Item2} />
                <h3>{props.Name.Item2}</h3>
                <h4><span>{props.Old.Item2}</span> {props.New.Item2}</h4>
            </div>
            <div className="deal--items" id="e" data-aos="fade-in" data-aos-delay="1500">
                <img src={props.Image.Item3} />
                <h3>{props.Name.Item3}</h3>
                <h4><span>{props.Old.Item3}</span> {props.New.Item3}</h4>
            </div>
            <div className="deal--items" id="r" data-aos="fade-in" data-aos-delay="1500">
                <img src={props.Image.Item4} />
                <h3>{props.Name.Item4}</h3>
                <h4><span>{props.Old.Item4}</span> {props.New.Item4}</h4>
            </div>

        </div>
    )
}
const CategoryData = [
    {
        Name: "Gaming Accessories",
        ImageURL: "https://images2.minutemediacdn.com/image/upload/c_crop,w_2071,h_1164,x_0,y_193/c_fill,w_1440,ar_16:9,f_auto,q_auto,g_auto/images/voltaxMediaLibrary/mmsport/mentalfloss/01g8eqh7x3frj93nqfh2.jpg"
    },
    {
        Name: "Beauty Picks",
        ImageURL: "https://1.bp.blogspot.com/-9RzFNo6QNMM/XgDOdhQ6ONI/AAAAAAAB4Zo/e4W03cEuF5ozTmswXY6conijJUPqhb7NACNcBGAsYHQ/s1600/Starry%2BStarry%2BEyes%2Bmakeup%2Btutorial%2B%252B%2Bmakeup%2Bproducts%2Bto%2Buse%2B1.jpeg"
    },
    {
        Name: "Get Premimium Now!",
        ImageURL: "https://media.istockphoto.com/id/1248347439/vector/elegant-black-head-wolf-art-logo-design-inspiration.jpg?s=612x612&w=0&k=20&c=UcvfTH0zQwwNXFxjZ7iWgxDQQ4YJXVtaczECJZa_uCI="
    },
    {
        Name: "Health and Hygiene",
        ImageURL: "https://www.careinsurance.com/upload_master/media/posts/July2022/personal-hygiene.jpg"
    },
    {
        Name: "Home Decor",
        ImageURL: "https://media.istockphoto.com/id/1190440285/photo/eclectic-living-room-interior-with-comfortable-velvet-corner-sofa-with-pillows.jpg?s=612x612&w=0&k=20&c=T87OfLSfrChREiVaDLJA4LIM2qvrc7UaosmxH75RY98="
    },
    {
        Name: "Electronics",
        ImageURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKlY2DMh-QJ1YecrcIhuUv7aFWeuyb-6sEJA&usqp=CAU"
    }
]

function Cards(props) {
    return (
        <div className="category--block" >
            <h2 className="category--name">{props.Name}</h2>
            <img src={props.ImageURL} className="category--image" />
            <a href="" className="category--link">See more</a>
        </div>
    )
}
const categories = CategoryData.map(Item => {
    return (
        <Cards
            Name={Item.Name}
            ImageURL={Item.ImageURL}
        />
    )
})
const books = [
    {
        ImageURL: "https://www.rockingbookcovers.com/wp-content/uploads/2013/01/BCA-wonderful-world.jpg",
        Genre: "Mystery"
    },
    {
        ImageURL: "https://www.rockingbookcovers.com/wp-content/uploads/2013/01/rooms.jpg",
        Genre: ""
    },
    {
        ImageURL: "https://www.rockingbookcovers.com/wp-content/uploads/2013/01/meltdown-e1289079193227.jpg",
        Genre: ""
    },
    {
        ImageURL: "https://www.rockingbookcovers.com/wp-content/uploads/2013/01/pinterest-manhattan.jpg",
        Genre: ""
    },
    {
        ImageURL: "https://www.rockingbookcovers.com/wp-content/uploads/2013/01/Joyce_9780679645115_epub_cvi_r1-e1343230239999.jpg",
        Genre: ""
    },
    {
        ImageURL: "https://images.ctfassets.net/usf1vwtuqyxm/24YWmI4UcyoMwj7wdKrEcL/374de1941927db12bd844fb197eab11f/English_Harry_Potter_3_Epub_9781781100233.jpg?w=914&q=70&fm=jpg",
        Genre: ""
    },
    {
        ImageURL: "https://www.rockingbookcovers.com/wp-content/uploads/2013/01/JM-toy-collector.jpg",
        Genre: "Mystery"
    },
    {
        ImageURL: "https://www.rockingbookcovers.com/wp-content/uploads/2013/01/JM-little-red-riding-hood-195x300.jpg",
        Genre: ""
    },
    {
        ImageURL: "https://www.rockingbookcovers.com/wp-content/uploads/2013/01/JM-dust-to-dust-198x300.jpg",
        Genre: ""
    },
    {
        ImageURL: "https://i.pinimg.com/564x/c6/65/f5/c665f51b0bb6acb40aeae1bf325f75dc.jpg",
        Genre: ""
    },
    {
        ImageURL: "https://i.pinimg.com/564x/95/21/70/952170eede825be44ea423b94938a3a4.jpg",
        Genre: ""
    },
    {
        ImageURL: "https://www.rockingbookcovers.com/wp-content/uploads/2013/01/GR-tragedy-paper.jpg",
        Genre: ""
    }
]
function BookScroll(props) {
    return (
        <div className="book--block">
            <a href=""><img className="book--cover" src={props.ImageURL} /></a>
            <div className="book--info">
                <h3 className="book--genre">
                    Genre:{props.Genre}
                </h3>
            </div>
        </div>
    )
}
const booksMap = books.map(book => {
    return (
        <BookScroll
            ImageURL={book.ImageURL}
            Genre={book.Genre}
        />
    )
})
function Categories() {
    return (
        <div>
            <div className="categories" data-aos="zoom-out" data-aos-duration="1500">
                {categories}
            </div>
            <div className="book--scroll">
                <h2>Top Selling Books of the Month</h2>
                <div className="book--flex">
                    <button></button>
                    {booksMap}
                    <button></button>
                </div>
            </div>
        </div>

    )
}

function Fashion() {
    return (
        <div className="fashion">
            <div className="overlapping--images">
                <img src="https://i.pinimg.com/736x/ca/48/d1/ca48d16cf263d74a1400c2b8c5ad3e7d.jpg" className="images--model" id="image-1" />
                <img src="https://images.mid-day.com/images/images/2022/aug/kiaraff5.jpg" className="images--model" id="image-2" />
            </div>
            <div className="images--content">
                <img src="https://img.icons8.com/?size=512&id=43s08h4rdYPW&format=png" className="small--logo" />
                <h2>Discover the world of <br /><span>FASHION</span></h2>
                <button className="fashion--button">See more</button>
                <img src="https://imgmedia.lbb.in/media/2020/08/5f39848236670374cd0ae434_1597604994155.jpg" className="ethnic--women" />
                <img src="https://imgmedia.lbb.in/media/2020/12/5fe08e7405250c1f0d865452_1608552052680.jpg" className="ethnic--men" />
                <img src="https://assets.gqindia.com/photos/5cdc6032e994c8ee73b68f52/4:3/w_1440,h_1080,c_limit/wedding-outfits-top-image.jpg" className="ethnic--men2" />
                <img src="https://i.pinimg.com/originals/83/1d/36/831d3602230b4fe2fe9759e552b6150b.jpg" className="another--image1" />
                <img src="https://assets.ajio.com/medias/sys_master/root/20220902/Fx8E/63111e15aeb269dbb3632ddd/-473Wx593H-463214239-green-MODEL.jpg" className="another--image2" />
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxNwNsNKs9z4F9kiTIV2tW8MeZoez0vKO6F4ba9v_dgPnCXr0ZpFTKGck4Hl-Ra_BuRFw&usqp=CAU" className="another--image3" />
            </div>
        </div>
    )
}
function GroceryMart() {
    return (
        <div className="animated--vegies">
            <img src="https://img.icons8.com/?size=512&id=18957&format=png" className="food--item--individual" />
            <img src="https://img.icons8.com/?size=512&id=dBmKhyC3hEFd&format=png" className="food--item--individual" />
            <img src="https://img.icons8.com/?size=512&id=9fHmhNma7M7p&format=png" className="food--item--individual" />
            <img src="https://img.icons8.com/?size=512&id=69668&format=png" className="food--item--individual" />
            <img src="https://img.icons8.com/?size=512&id=9PLBI5470lwK&format=png" className="food--item--individual" />
            <img src="https://img.icons8.com/?size=512&id=9OvuTiwGcCLu&format=png" className="food--item--individual" />
            <img src="https://img.icons8.com/?size=512&id=Yk5K3xf90AeD&format=png" className="food--item--individual" />
            <img src="https://img.icons8.com/?size=512&id=36142&format=png" className="food--item--individual" />
            <img src="https://img.icons8.com/?size=512&id=OIc5mOK0CRfO&format=png" className="food--item--individual" />
        </div>

    )
}
function GrocerySection() {
    return (
        <div className="grocery--container">
            <h1 className="grocery--heading">Grocery Mart</h1>
            <div className="dynamic--normal">
                <h2 className="cool--heading">
                    <span className="dynamic--text">
                        <ul>
                            <li className="an1">Fresh fruits & veggies</li>
                            <li className="an2">Snack and Indulgencies</li>
                            <li className="an3">Daily essentials</li>
                            <li className="an4">Dairy, Bread and Eggs</li>
                        </ul>
                    </span>
                    <span className="static--text">
                        <br />delivered in minutes,<br />
                        from the house of Wolf
                    </span>

                </h2>
                <span className="extra">
                    Open 6 AM to late night everyday
                </span>
                <a href="">
                    <input type="button" value="Explore Grocery Mart" className="grocery--link" />
                </a>
            </div>
            <div className="food--items">
                <GroceryMart />
            </div>
        </div>
    )
}
function Advantages() {
    return (
        <div className="advantages--container">
            <div className="advantages--heading">
                <h2>WHY US?</h2>
            </div>
            <div className="advantages--cards">

                <div className="world--wide">
                    <div className="circle"></div>
                    <div className="world--content">
                        <h2>Explore a world with every item available , which can be<br /> delivered to <br />anywhere in the<br /> world</h2>
                    </div>
                    <img src="https://img.icons8.com/?size=512&id=qHgGjzWXr9QT&format=png" />
                </div>
                <div className="world--wide cheap">
                    <div className="circle"></div>
                    <div className="world--content">
                        <h2>Items available at cheaper rates,no commission of middle men and no unnecessary bills !</h2>
                    </div>
                    <img src="https://img.icons8.com/?size=512&id=13013&format=png" />

                </div>
                <div className="world--wide replace">
                    <div className="circle"></div>
                    <div className="world--content ">
                        <h2>If the product delivered is not like you expected, you can easily<br/> return it within<br/>10 days of<br/> arrival</h2>
                    </div>
                    <img src="https://img.icons8.com/?size=512&id=cM0WKlQcz4g0&format=png" />

                </div>
                <div className="world--wide offers">
                    <div className="circle"></div>
                    <div className="world--content">
                        <h2>According to Statistics we have the most number of exciting discounts , far more than any other<br/> platform</h2>
                    </div>
                    <img src="https://img.icons8.com/?size=512&id=63761&format=png" />

                </div>
                <div className="world--wide waranty">
                    <div className="circle"></div>
                    <div className="world--content">
                        <h2>Every product delivered, resembles our reputation <br/>hence we <br/>guarentee a<br/> waranty on all of<br/> our products</h2>
                    </div>
                    <img src="https://img.icons8.com/?size=512&id=PgZy4VK3SA4U&format=png" />

                </div>
                <div className="world--wide trust">
                    <div className="circle"></div>
                    <div className="world--content">
                        <h2>Loved and trusted by millions of users all over the world</h2>
                    </div>
                    <img src="https://img.icons8.com/?size=512&id=37000&format=png" />

                </div>
            </div>
        </div>

    )
}
function Footer(){
    return(
        <footer className="ending">
            <a href="#"className="button">
                <div className="icon">    
                    <i className="fa fa-facebook"></i>
                    <span>Facebook</span>
                </div>

            </a>
            <a href="#"className="button">
                <div className="icon">    
                    <i className="fa fa-twitter"></i>
                    <span>Twitter</span>
                </div>
            </a>
            <a href="#"className="button">
                <div className="icon">    
                    <i className="fa fa-instagram"></i>
                    <span>Instagram</span>
                </div>
    
            </a>
            <a href="#"className="button">
                <div className="icon">    
                    <i className="fa fa-github"></i>
                    <span>Github</span>
                </div>

            </a>
        </footer>
    )
}
function Main() {
    return (
        <div>
            <Navbar />,
            <Event />,
            <Deals
                Image={deals.ImageURL}
                Name={deals.Name}
                Old={deals.Original_Price}
                New={deals.Sale_Price}
            />
            <Categories />
            <Fashion />
            <GrocerySection />
            <Advantages />
            <Footer/>
        </div>
    )
}
ReactDOM.render(
    <Main />,
    document.getElementById("root"))