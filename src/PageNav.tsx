
export default function PageNav({ page }:{ page:number }) {
    return (
        <div className="flex gap-3 items-center mt-3">
            <span className="inline text-[#4D5562] text-[12px] mr-2">Step {page} of 3</span>
            {[1,2,3].map((num)=>(
                num === page ?
                <div className="h-4 w-4 inline bg-[#845EEE] rounded-full border-3 border-[#4D5562]" /> :
                <div className="inline rounded-full bg-[#394150] h-3 w-3"></div>
            )
            )
            }
        </div>
    )
}