import {AiOutlineArrowRight} from 'react-icons/ai'

interface Props {
  publisher_url: string;
  publisher: string;
}

const RecipeCook = ({ publisher_url, publisher }: Props) => {
  return (
    <div className="flex flex-col items-center justify-center py-8 gap-y-6 ">
      <h2 className="text-lg font-bold text-center text-orange">
        HOW TO COOK IT
      </h2>
      <p className="w-4/5 mx-auto text-sm font-semibold text-center text-brown">
        This recipe was carefully designed and tested by{" "}
        <span className="font-bold">{publisher}</span>. Please check out
        directions at their website.
      </p>
      <a href={publisher_url} target='_blank' className="gap-2 text-xs border-none rounded-3xl bg-orange_to_red btn">
        DIRECTIONS
        <AiOutlineArrowRight size={16} />
      </a>
    </div>
  );
};

export default RecipeCook;
