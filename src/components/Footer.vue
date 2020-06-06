<template>
    <div class="footer-component">
        <div class="container">
            <div class="row">
                <div class="col-md-4 col-xs-12">
                    <div class="first">
                        <h4>Projets</h4>
                        <div class="d-flex flex-column projects">
                            <ArrowButton 
                                v-for="(project, index) of projet_list"
                                :key="index"
                                :title='`projects.${project.name}.name`' class="project-link m-1">
                            </ArrowButton>
                        </div>  
                    </div>
                </div>
                <div class="col-md-4 col-xs-12">
                    <div class="second">
                        <h4> Navigate</h4>
                        <ul>
                            <li class="nav-item" v-for="(tab, index) in local_lang_datas.tabs" :key="index">
                                <a class="nav-link"
                                    :class="index+'-tab'"
                                    :href="'#'+index">
                                    {{ tab | capitalize }}
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="col-md-4 col-xs-12">
                    <div class="third">
                        <h4> Contact</h4>
                        <ul>
                            <li>Julien Baylac</li>
                            <li>+33 678 67 99 13</li>
                            <li>julien.baylac@protonmail.com</li>
                            <li>Rennes, France </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <div class="line"></div>
                    <div class="second2">
                        <SocialNetworkBar/>
                    </div>
                </div>
            </div>
         </div>
    </div>
</template>

<script>
import SocialNetworkBar from '@/components/SocialNetworkBar'
import ArrowButton from '@/components/buttons/ArrowButton'
import { mapGetters } from 'vuex'
import { Projects } from '@/utils/lists'

export default {
    name: 'footer-component',
    components: {
        SocialNetworkBar,
        ArrowButton
    },  
    computed: {
    ...mapGetters([
        'local_lang_datas'
    ]),
    projet_list() {
        return Projects
    }
  }
}
</script>

<style lang="scss" scoped>
* {
    margin: 0px;
    padding: 0px;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
}
.footer-component {
    background: linear-gradient(rgba(0,0,0,0.7),rgba(0,0,0,0.7)), url("http://andreeabunget.co.uk/Img/footer.jpg");
    background-size: cover;
    
}
.first {
    margin-top: 40px;
    margin-bottom: 50px;
}
.first h4 {
    font-size: 20px;
    letter-spacing: 3px;
    position: relative;
    margin-bottom: 20px;
    font-size: 1.6em;
    color: #fff;
    padding-bottom: 0.5em;
}
.first h4::after {
    content: '';
    background: #66c83d;
    width: 20%;
    height: 2px;
    position: absolute;
    bottom: 0;
    left: 0;
}
.second {
    margin-top: 40px;
    margin-bottom: 40px;
    color: rgb(206,206,206);
    font-family: 'Poppins', sans-serif;
    text-align: center;
}
.second2 {
    margin-top: 40px;
    margin-bottom: 40px;
    color: rgb(206,206,206);
    font-family: 'Poppins', sans-serif;
    text-align: center;
}
.second h4 {
    font-size: 20px;
    letter-spacing: 3px;
    position: relative;
    margin-bottom: 20px;
    font-size: 1.6em;
    color: #fff;
    padding-bottom: 0.5em;
}
.second h4::after {
    content: '';
    background: #66c83d;
    width: 20%;
    height: 2px;
    position: absolute;
    bottom: 0;
    left: 40%;
}
.second li {
    list-style: none;
}
.second a, .second2 a {
    color: rgb(206, 206, 206);
    text-decoration: none;
    letter-spacing: 3px;
    font-weight: bold;
    font-size: 12px;
    transition: 0.2s;
}
.second a:hover, .second2 a:hover {
    color: #fff;
    transition: 0.2s;
    text-shadow: 1px 1px 20px rgba(0,0,0,1);
    text-decoration: none
}
.third {
    margin-top: 40px;
    margin-bottom: 50px;
    color: rgb(206,206,206);
    font-family: 'Poppins', sans-serif;
    text-align: right;
}
.third h4 {
    font-size: 20px;
    letter-spacing: 3px;
    position: relative;
    margin-bottom: 20px;
    font-size: 1.6em;
    color: #fff;
    padding-bottom: 0.5em;
}
.third h4::after {
    content: '';
    background: #66c83d;
    width: 20%;
    height: 2px;
    position: absolute;
    bottom: 0;
    left: 80%;
}
.third li {
    list-style: none;
    padding-bottom: 15px;
}
.third a {
    color: rgb(206, 206, 206);
    text-decoration: none;
    letter-spacing: 3px;
    font-weight: bold;
    font-size: 14px;
    transition: 0.2s;
}
.third a:hover {
    color: #fff;
    transition: 0.2s;
    text-shadow: 1px 1px 20px rgba(0,0,0,1);
}
@media screen and (max-width:1000px) {
    .first {
        text-align: center;
        .projects {
            align-items: center;
        }
    }
    .first h4::after {
        left: 40% !important;
    }
}

@media screen and (max-width:1000px) {
    .third {
        text-align: center;
    }
    .third h4::after {
        left: 40% !important;
    }
}
.margin {
    margin-left: 20px;
}
.line {
    height:2px;
    background-color:rgb(206,206,206);
    width:100%;
}
.container h1{
    text-align:center;
    margin-top:100px;
    margin-bottom:100px;
}
.project-link {
    color: rgb(206,206,206);
    width: 400px !important;
    font-family: 'Poppins', sans-serif;
}
</style>
