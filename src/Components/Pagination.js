import React from "react";

const Pagination = ({onChange,page}) => {
    console.log('pppp ',page);
    const currentPageClassName = 'z-10 bg-indigo-50 border-indigo-500 text-indigo-600';
    const handleClick = (e,page) => {
        debugger
        e.preventDefault();
        if(page>1) 
        onChange(e,page-1);
      };
  return (
   
          <nav className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination">
            <a href="#" className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
             onClick ={page==1?(e) => e.preventDefault():(e)=>onChange(e,page-1)}>
             {/* Previous */}
              &laquo;
              {/* <!-- Heroicon name: solid/chevron-left --> */}
              {/* <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fill-rule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd" />
              </svg> */}
            </a>
            <a href="#" aria-current="page" className={`${page == 1?currentPageClassName:''} relative inline-flex items-center px-4 py-2 border text-sm font-medium`}
            onClick ={(e)=>onChange(e,1)}>
              1
            </a>
            <a href="#" className={`${page == 2?currentPageClassName:''} relative inline-flex items-center px-4 py-2 border text-sm font-medium`}
             onClick ={(e)=>onChange(e,2)}>
              2
            </a>
            <a href="#" className={`${page == 3?currentPageClassName:''} relative inline-flex items-center px-4 py-2 border text-sm font-medium`}
             onClick ={(e)=>onChange(e,3)}>
              3
            </a>
           
            <a href="#" className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
               onClick ={page==3?(e) => e.preventDefault():(e)=>onChange(e,page+1)}>
              {/* Next */}
              {/* <!-- Heroicon name: solid/chevron-right --> */}
              &raquo;
              {/* <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
              </svg> */}
            </a>
          </nav>
     
    
    
  );
};

export default Pagination;
