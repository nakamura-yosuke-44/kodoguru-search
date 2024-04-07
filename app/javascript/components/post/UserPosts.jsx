import React from 'react';
import PropTypes from 'prop-types';
import PostModal from './PostModal';

function UserPosts({ userPosts = null, setUserPosts = () => {}, shopId = null }) {
  return (
    <>
      <div className="flex pl-10 pt-10">
        <div className="text-xl">みんなの投稿</div>
        <PostModal setUserPosts={setUserPosts} shopId={shopId} />
      </div>
      <div className="mx-4 mt-12 flex items-center justify-center">
        <div>
          <div className=" border-blackflex flex-col items-center justify-center sm:text-base ">
            {userPosts.map((post) => (
              <div className="card my-4 w-96 bg-base-100 shadow-xl">
                <figure><img src={post.image.url} /></figure>
                <div className="card-body">
                  <div className="card-title">{post.title}</div>
                  <p>{post.body}</p>
                  <p>
                    by
                    {post.user.name}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

UserPosts.propTypes = {
  userPosts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      body: PropTypes.string.isRequired,
      user_id: PropTypes.number.isRequired,
      shop_id: PropTypes.number.isRequired,
      image: PropTypes.string.isRequired,
    }),
  ),
  setUserPosts: PropTypes.func,
  shopId: PropTypes.number,
};

export default UserPosts;
