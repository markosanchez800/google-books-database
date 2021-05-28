import axios from "axios"; 

export default {


  getBook: function (search) {
    return axios.get(`https://www.googleapis.com/books/v1/volumes?q=${search}`);
  },
 
  deleteBook: function (id) {
    return axios.delete("/api/books/" + id)
  },


  saveBook : function(id) { 
    return axios.post("/api/books/", id).then(result => result.data); 
    },


   deleteBook : function(bookId) { 
     return axios.delete("/api/books/" + bookId ); 
    }

    
};
