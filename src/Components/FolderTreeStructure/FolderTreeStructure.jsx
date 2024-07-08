import React,{useState} from 'react';


const FolderTreeStructure = ({ folderStructureData }) => {

  const [expand, setExpand] = useState(false);

  if(folderStructureData.isFolder){
     return (
       <div style={{ margin: "5px" }}>
         <div>
           <span onClick={() => setExpand(!expand)}>
             📁{folderStructureData?.name}
           </span>
         </div>
         <div style={{ display: expand ? "block" : "none", paddingLeft:"25px" }}>
            {folderStructureData?.items?.map((item) => {
                return (
                    <FolderTreeStructure key={item.id} folderStructureData={item}/>
                )
            })}
         </div>
       </div>
     );
  }
  else{
    return <div>🗒️{folderStructureData?.name}</div>;
  }
 
};

export default FolderTreeStructure