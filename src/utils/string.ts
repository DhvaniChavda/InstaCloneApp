import {APP_IMAGES} from 'src/assets/images';
import {Routes} from 'src/navigation/route';
import dummy_string from 'src/utils/dummy_string';

export default {
  spalsh: {
    from: 'from',
    meta: 'Meta',
    press_again: 'Press again to exit app.',
  },
  intro: {
    title: 'Instagram Clone App',
    description: `Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.

    The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.
    
    On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains.
    
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    
    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?`,
    instagram: 'Instagram',
    letStart: `Let's get started`,
  },
  home: {
    your_story: 'Your Story',
  },
  profile: {
    posts: 'Posts',
    follwers: 'Follwers',
    following: 'Following',
    edit_profile: 'Edit profile',
    share_profile: 'Share profile',
    tagged: 'Tagged',
    manage: 'Manage',
    liked_by: 'Liked by ',
    view_all_comments: (comments: number) => `View all ${comments} comments`,
    comment_are_off: 'Comments are off',
    review_control: 'Review controls.',
    follow: 'Follow',
    likes: (like: number) => `${like} likes`,
    save: 'Save',
    qr_code: 'QR code',
    moving_things: `we're moving thing around!!`,
    where_to_share: 'see where to share and link',
  },
  setting: {
    setting_ativity: 'Setting and Activity',
    search: 'Search',
    your_account: 'Your Account',
    meta: 'Meta',
    security_info: 'password, security, personal detail, ads',
    dummy_info:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    account_center: 'Account center',
    how_to_use: 'How to use instagram',
    who_can_see_your_ac: 'Who can see your content',
    how_other: 'How others can interact with you',
    what_you_see: 'What you see',
    your_app: 'Your app and media',
    for_proffesional: 'For proffesionals',
    your_order: 'Your orders and fundrasaisers',
    more_info: 'More info and support',
  },
  bottomTabData: [
    {
      id: 1,
      icon: APP_IMAGES.ic_home,
      checked_icon: APP_IMAGES.ic_black_home,
      route: Routes.HomeScreen,
    },
    {
      id: 2,
      icon: APP_IMAGES.ic_search,
      checked_icon: APP_IMAGES.ic_search,
      route: Routes.SearchScreen,
    },
    {
      id: 3,
      icon: APP_IMAGES.ic_post,
      checked_icon: APP_IMAGES.ic_post,
      route: Routes.PostScreen,
    },
    {
      id: 4,
      icon: APP_IMAGES.ic_reels,
      checked_icon: APP_IMAGES.ic_reels,
      route: Routes.ReelScreen,
    },
    {
      id: 5,
      icon: APP_IMAGES.ic_profile,
      checked_icon: APP_IMAGES.ic_black_profile,
      route: Routes.ProfileScreen,
    },
  ],
  moreTabList: [
    {
      id: 1,
      image: APP_IMAGES.ic_like,
      title: 'Share to facebook',
    },
    {
      id: 2,
      image: APP_IMAGES.ic_smile,
      title: 'Archieved',
    },
    {
      id: 3,
      image: APP_IMAGES.ic_like_feel,
      title: 'Hide commenting',
    },
    {
      id: 4,
      image: APP_IMAGES.ic_comment,
      title: 'Turm off commenting',
    },
    {
      id: 5,
      image: APP_IMAGES.ic_smile,
      title: 'Turn off commenting',
    },
    {
      id: 6,
      image: APP_IMAGES.ic_reels,
      title: 'Create reel from this post',
    },
    {
      id: 7,
      image: APP_IMAGES.ic_edit,
      title: 'Edit',
    },
    {
      id: 7,
      image: APP_IMAGES.ic_share_posts,
      title: 'Pin your profile',
    },
    {
      id: 8,
      image: APP_IMAGES.ic_search,
      title: 'Delete',
    },
  ],
  moreTabTaggedList: [
    {
      id: 1,
      image: APP_IMAGES.ic_like,
      title: `why you're seeing this post`,
    },
    {
      id: 2,
      image: APP_IMAGES.ic_tagged_post,
      title: 'Tag options...',
    },
    {
      id: 3,
      image: APP_IMAGES.ic_profile,
      title: 'About this account',
    },
    {
      id: 4,
      image: APP_IMAGES.ic_carasoul,
      title: 'Report',
    },
  ],
};
