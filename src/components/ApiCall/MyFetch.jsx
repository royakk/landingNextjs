

const MyFetch= async(props)=> {
        console.log("propssssss in myfetch",props);
        const auth="Bearer "+props.token;
        const options = {
          method: props.method,
          headers:{
              "Content-Type":"application/json",
              "Authorization":auth ,
          },
      
        };
        if(props.method == 'POST'){
          options.body =(props.body);
        }

          const res = await fetch(`${props.BaseUrl}${props.Module}${props.ApiVersion}${props.EndPoint}${props.parameters}`, options)
          
        
          return res;

}
export default  MyFetch;


