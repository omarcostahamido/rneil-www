Portfolio site for bonsai artist, Ryan Neil. Built with Webpack, Netlify, React, and Prismic by Kendall Strautman. Designed by Brian Swarthout. 

*--Main Component Tree--*

App

RootApp_Data
                                                                    
Routes 

    -Homepage
        
        -Nav   
        -Header
        -Loader  
        -Casestudy_Featured 
        
    -Casestudy
    
         -Nav   
         -Casestudy_Slice - renders all slices   
         -Header_Slice    
         -Next_Btn
         
    -Exhibitions
    
         -Nav    
         -Casestudy_Featured
         
    -About 
    
          -Nav
          -Pull_Quote_Slice
          -Image_Dyptich
          -Video_Module_Slice
          
    -Not_Found   
    
          -Nav
          
    -Error_Boundary
          -Nav
