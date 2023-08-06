import Image from "next/image";

const ContentCard = (props) => {
  return (
    <>
      <div className="backdrop-blur-sm hover:shadow-2xl w-96 h-96 rounded-lg bg-orange-200 flex flex-col justify-around">
        <div className="h-1/3 flex justify-center">
          <Image src={props.item.imageUrl} width={200} height={200}>
          </Image>
        </div>

        <span className="text-center text-2xl font-bold">
          {props.item.title}
        </span>
        <div className="text-center">
          {props.item.content}
        </div>
        <a href={props.item.url} target="_blank" className="cursor-pointer text-center font-bold text-blue-600 text-xl">
          Learn More
        </a>
      </div>
    </>
  )
}

export default ContentCard;