/* eslint-disable */
/////////////////////////////////////////////////////////////////////////////////////////
//                                                                                     //
// !!! DO NOT EDIT THIS FILE !!!                                                       //
//                                                                                     //
// This file is auto-generated by scripts/generate-web-api-types.sh in the repository. //
// Please refer to the script code to learn how to update the source data.             //
//                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////

import { WebAPICallResult } from '../WebClient';
export type ConversationsInviteResponse = WebAPICallResult & {
  channel?:  Channel;
  error?:    string;
  errors?:   Error[];
  needed?:   string;
  ok?:       boolean;
  provided?: string;
};

export interface Channel {
  context_team_id?:            string;
  created?:                    number;
  creator?:                    string;
  id?:                         string;
  internal_team_ids?:          string[];
  is_archived?:                boolean;
  is_channel?:                 boolean;
  is_ext_shared?:              boolean;
  is_general?:                 boolean;
  is_group?:                   boolean;
  is_im?:                      boolean;
  is_member?:                  boolean;
  is_moved?:                   number;
  is_mpim?:                    boolean;
  is_open?:                    boolean;
  is_org_shared?:              boolean;
  is_pending_ext_shared?:      boolean;
  is_private?:                 boolean;
  is_shared?:                  boolean;
  last_read?:                  string;
  name?:                       string;
  name_normalized?:            string;
  pending_connected_team_ids?: string[];
  pending_shared?:             string[];
  previous_names?:             string[];
  purpose?:                    Purpose;
  shared_team_ids?:            string[];
  topic?:                      Purpose;
  unlinked?:                   number;
  updated?:                    number;
}

export interface Purpose {
  creator?:  string;
  last_set?: number;
  value?:    string;
}

export interface Error {
  error?: string;
  ok?:    boolean;
}
