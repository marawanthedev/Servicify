import React from "react";
import Avatar from "../search_result/avatar";
import "./post_card.css";
import PostContent from "./post_content";
import PostFooter from "./post_footer";
import OptionButton from "./option_Button";
import FeeIcon from "./icons/fee_icon";
import PostHeaderInfo from "./post_header-info";
import TimeIcon from "./icons/time_icon";
import LocationIcon from "./icons/location_icon";

const PostCard = (props) => {
  return (
    <div className="post-wrapper">
      <PostHeader {...props.post} />
      <PostContent {...props.post} />
      <PostFooter {...props.post} />
    </div>
  );
};

const PostHeader = ({ postTime, postLocation, cancelllationFee }) => {
  return (
    <div className="post-header__content_styles">
      <div className="post-header__res">
        <Avatar
          source="https://pixinvent.com/materialize-material-design-admin-template/app-assets/images/user/12.jpg"
          width={"100px"}
          height={"100px"}
        />
        <div className="service_provider__avatar__side__content">
          <PostHeaderInfo description={postTime} icon={<TimeIcon />} />
          <PostHeaderInfo description={postLocation} icon={<LocationIcon />} />
          <PostHeaderInfo description={cancelllationFee} icon={<FeeIcon />} />
        </div>
      </div>
      <OptionButton>
        <Dropdownmenu>
          <DropdownmenuItem>Remove post</DropdownmenuItem>
          <DropdownmenuItem>Edit post</DropdownmenuItem>
          <DropdownmenuItem>copy post link</DropdownmenuItem>
        </Dropdownmenu>
      </OptionButton>
    </div>
  );
};

const Dropdownmenu = (props) => {
  return <div className="post__dropdown-options">{props.children}</div>;
};

const DropdownmenuItem = (props) => {
  return (
    <div className="item__options__selected">
      <p>{props.children}</p>
    </div>
  );
};

export default PostCard;