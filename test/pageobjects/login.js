class Login{
 get menu(){
    return $('~open menu');
 }

get loginMenu(){
    return $('~menu item log in');
}

get userName(){
    return $('~Username input field');
}

get passWord(){
    return $('~Password input field');
}

get loginBtn(){
    return $('~Login button');
}

get successfullLogin(){
    return $('~sort button');
}


}

module.exports = new Login();