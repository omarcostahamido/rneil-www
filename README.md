Portfolio site for bonsai artist, Ryan Neil. Built with Webpack, Netlify, React, and Prismic by Kendall Strautman. Designed by Brian Swarthout. 

*--Main Component Tree--* view on wide screen re:formatting

App
|
RootApp_Data---------------------------------------------------------
|                                                                   |
Routes-------------------------------------------------             |
|             |           |                |          |             |
Homepage  Casestudy   Exhibitions        About     Not_Found   Error_Boundary
|             |   ________|_______         |          |             |
|             |   |              |         |         Nav           Nav
|             |  Nav    Casestudy_Featured | 
|             |                        ____|_____________________ 
--------------|-------------------    |        |                |  
|       |     |   |              |   Nav   Video_Module_Slice  Image_Dyptich 
Nav   Header  | Loader  Casestudy_Featured              
              |         
              |
--------------------------------------------
|           |                |             |
Nav   Casestudy_Slice   Header_Slice    Next_Btn
            |
      handles all /Slices
