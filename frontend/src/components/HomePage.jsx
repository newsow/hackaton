import React from 'react'
// import '../style-main.css'

function HomePage(){
    return(
        <>
        <div className="UserInfo">dasda</div>

        <div className="menu" tabindex="1">
            <p>тут ник пользователя</p>
            <a>Show photos</a>
            <>
            <img className="avatar" src="https://static.cdprojektred.com/cms.cdprojektred.com/16x9_big/f4ce7b1be9bc4b0ee2df8f9a311a850a594d3d1a-1920x1080.jpg"></img>
            </>
        </div>
        <section>
            <div className="form-box">
                <div className="form-value">
                    <form action="">
                        <h2>User's search</h2> 
                        <>
                        <div className="inputbox">
                            <ion-icon name="people-circle-outline"></ion-icon>
                            <input type="user" required></input>
                            <label for="">Username</label>
                            
                        </div>
                        </>
                        <button onclick="window.location.href = '1';"><ion-icon name="search-outline"></ion-icon></button> 
                        
                    </form>
                    
                </div>
                
            </div>
        </section>
    
        <div class="photos">
    
        </div>
        <script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"></script>
        <script nomodule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"></script>
        </>
    )
}

export default HomePage