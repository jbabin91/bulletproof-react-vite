import {
  render as rtlRender,
  screen,
  waitForElementToBeRemoved,
} from '@testing-library/react';

import { Providers } from '@/providers';

// export const createUser = async (userProperties?: any) => {
//   const user = generateUser(userProperties) as any;
//   await db.user.create({ ...user, password: hash(user.password) });
//   return user;
// };

// export const createDiscussion = async (discussionProperties?: any) => {
//   const discussion = generateDiscussion(discussionProperties);
//   const res = await db.discussion.create(discussion);
//   return res;
// };

// export const loginAsUser = async (user: any) => {
//   const authUser = await authenticate(user);
//   Cookies.set(AUTH_COOKIE, authUser.jwt);
//   return authUser;
// };

export const waitForLoadingToFinish = () =>
  waitForElementToBeRemoved(
    () => [
      ...screen.queryAllByTestId(/loading/i),
      ...screen.queryAllByText(/loading/i),
    ],
    { timeout: 4000 },
  );

// const initializeUser = async (user: any) => {
//   if (typeof user === 'undefined') {
//     const newUser = await createUser();
//     return loginAsUser(newUser);
//   } else if (user) {
//     return loginAsUser(user);
//   } else {
//     return null;
//   }
// };

export const renderApp = async (
  ui: any,
  { ...renderOptions }: Record<string, any> = {},
) => {
  const returnValue = {
    ...rtlRender(ui, {
      wrapper: () => {
        return (
          <Providers>
            <div>App</div>
          </Providers>
        );
      },
      ...renderOptions,
    }),
  };

  await waitForLoadingToFinish();

  return returnValue;
};

export * from '@testing-library/react';
export { render as rtlRender } from '@testing-library/react';
export { default as userEvent } from '@testing-library/user-event';
