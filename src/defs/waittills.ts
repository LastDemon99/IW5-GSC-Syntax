import { CompletionItem, CompletionItemKind } from 'vscode';

export const waittillCompletions: CompletionItem[] = [
    new CompletionItem('player waittill("menuresponse", menu, response);', CompletionItemKind.Event),
    new CompletionItem('player waittill("spawned_player");', CompletionItemKind.Event),
    new CompletionItem('player waittill("death");', CompletionItemKind.Event),
    new CompletionItem('player waittill("joined_team");', CompletionItemKind.Event),
    new CompletionItem('player waittill("reload");', CompletionItemKind.Event),
    new CompletionItem('player waittill("adjustedStance");', CompletionItemKind.Event),
    new CompletionItem('player waittill("jumped");', CompletionItemKind.Event),
    new CompletionItem('player waittill("weapon_change", weapon);', CompletionItemKind.Event),
    new CompletionItem('player waittill("grenade_fire", grenade, grenadeName);', CompletionItemKind.Event),
    new CompletionItem('player waittill("damage", damage, attacker, direction_vec, point, type, modelName, tagName, partName, iDFlags, weapon);', CompletionItemKind.Event),
    new CompletionItem('player waittill("damage", damage, attacker, direction_vec, point, type, modelName, tagName, partName, iDFlags);', CompletionItemKind.Event),
    new CompletionItem('player waittill("damage", damage, attacker, direction_vec, point, type, modelName, tagName, partName);', CompletionItemKind.Event),
    new CompletionItem('player waittill("damage", damage, attacker, direction_vec, point, type, modelName, tagName);', CompletionItemKind.Event),
    new CompletionItem('player waittill("damage", damage, attacker, direction_vec, point, type, modelName);', CompletionItemKind.Event),
    new CompletionItem('player waittill("damage", damage, attacker, direction_vec, point, type);', CompletionItemKind.Event),
    new CompletionItem('player waittill("damage", damage, attacker, direction_vec, point);', CompletionItemKind.Event),
    new CompletionItem('player waittill("damage", damage, attacker, direction_vec);', CompletionItemKind.Event),
    new CompletionItem('player waittill("damage", damage, attacker);', CompletionItemKind.Event),
    new CompletionItem('player waittill("damage", damage);', CompletionItemKind.Event),
    new CompletionItem('player waittill("damage");', CompletionItemKind.Event),
    new CompletionItem('player waittill("killed_enemy");', CompletionItemKind.Event),
    new CompletionItem('player waittill("stopRevenge");', CompletionItemKind.Event),
    new CompletionItem('player waittill("disconnect");', CompletionItemKind.Event),
    new CompletionItem('self waittill("menuresponse", menu, response);', CompletionItemKind.Event),
    new CompletionItem('self waittill("spawned_player");', CompletionItemKind.Event),
    new CompletionItem('self waittill("death");', CompletionItemKind.Event),
    new CompletionItem('self waittill("joined_team");', CompletionItemKind.Event),
    new CompletionItem('self waittill("reload");', CompletionItemKind.Event),
    new CompletionItem('self waittill("adjustedStance");', CompletionItemKind.Event),
    new CompletionItem('self waittill("jumped");', CompletionItemKind.Event),
    new CompletionItem('self waittill("weapon_change", weapon);', CompletionItemKind.Event),
    new CompletionItem('self waittill("grenade_fire", grenade, grenadeName);', CompletionItemKind.Event),
    new CompletionItem('self waittill("damage", damage, attacker, direction_vec, point, type, modelName, tagName, partName, iDFlags, weapon);', CompletionItemKind.Event),
    new CompletionItem('self waittill("damage", damage, attacker, direction_vec, point, type, modelName, tagName, partName, iDFlags);', CompletionItemKind.Event),
    new CompletionItem('self waittill("damage", damage, attacker, direction_vec, point, type, modelName, tagName, partName);', CompletionItemKind.Event),
    new CompletionItem('self waittill("damage", damage, attacker, direction_vec, point, type, modelName, tagName);', CompletionItemKind.Event),
    new CompletionItem('self waittill("damage", damage, attacker, direction_vec, point, type, modelName);', CompletionItemKind.Event),
    new CompletionItem('self waittill("damage", damage, attacker, direction_vec, point, type);', CompletionItemKind.Event),
    new CompletionItem('self waittill("damage", damage, attacker, direction_vec, point);', CompletionItemKind.Event),
    new CompletionItem('self waittill("damage", damage, attacker, direction_vec);', CompletionItemKind.Event),
    new CompletionItem('self waittill("damage", damage, attacker);', CompletionItemKind.Event),
    new CompletionItem('self waittill("damage", damage);', CompletionItemKind.Event),
    new CompletionItem('self waittill("damage");', CompletionItemKind.Event),
    new CompletionItem('self waittill("killed_enemy");', CompletionItemKind.Event),
    new CompletionItem('self waittill("stopRevenge");', CompletionItemKind.Event),
    new CompletionItem('self waittill("disconnect");', CompletionItemKind.Event),
    new CompletionItem('level waittill("putout_fires");', CompletionItemKind.Event),
    new CompletionItem('level waittill("new_destructible_spotlight");', CompletionItemKind.Event),
    new CompletionItem('level waittill("connecting", player);', CompletionItemKind.Event),
    new CompletionItem('level waittill("prematch_over");', CompletionItemKind.Event),
    new CompletionItem('level waittill("createfx_common_done");', CompletionItemKind.Event),
    new CompletionItem('level waittill("connected", player);', CompletionItemKind.Event),
    new CompletionItem('level waittill("eternity");', CompletionItemKind.Event),
    new CompletionItem('level waittill("game_ended");', CompletionItemKind.Event),
    new CompletionItem('level waittill("connected", player);', CompletionItemKind.Event),
    new CompletionItem('level waittill("rain_change", change, blendTime);', CompletionItemKind.Event),
    new CompletionItem('level waittill("disconnected", player);', CompletionItemKind.Event),
    new CompletionItem('level waittill("emp_update");', CompletionItemKind.Event),
    new CompletionItem('level waittill("player_spawned", player);', CompletionItemKind.Event),
    new CompletionItem('level waittill("host_migration_begin");', CompletionItemKind.Event),
    new CompletionItem('level waittill("final_killcam_done");', CompletionItemKind.Event),
    new CompletionItem('level waittill("radar_status_change");', CompletionItemKind.Event),
    new CompletionItem('level waittill("host_migration_end");', CompletionItemKind.Event),
    new CompletionItem('level waittill("restarting");', CompletionItemKind.Event),
    new CompletionItem('level waittill("player_eliminated", player);', CompletionItemKind.Event),
    new CompletionItem('level waittill("hq_captured");', CompletionItemKind.Event),
    new CompletionItem('level waittill("hq_destroyed");', CompletionItemKind.Event),
    new CompletionItem('level waittill("juggernaut_equipped", player);', CompletionItemKind.Event),
    new CompletionItem('level waittill("nuke_death");', CompletionItemKind.Event),
    new CompletionItem('level waittill("new_ent_selection");', CompletionItemKind.Event),
    new CompletionItem('level waittill("new_createfx_centerprint");', CompletionItemKind.Event),
    new CompletionItem('level waittill("set_disable_friendlyfire_value_delayed");', CompletionItemKind.Event),
    new CompletionItem('level waittill("handle_destructible_frame_queue");', CompletionItemKind.Event),
    new CompletionItem('level waittill("stop all gunfireloopfx");', CompletionItemKind.Event),
    new CompletionItem('level waittill("newpath");', CompletionItemKind.Event),
    new CompletionItem('level waittill("end_game");', CompletionItemKind.Event),
    new CompletionItem('level waittill("matchevent_started");', CompletionItemKind.Event),
    new CompletionItem('level waittill("end_draw_map_bounds");', CompletionItemKind.Event),
    new CompletionItem('level waittill("abort_forfeit");', CompletionItemKind.Event),
    new CompletionItem('level waittill("match_forfeit_timer_beginning");', CompletionItemKind.Event),
    new CompletionItem('level waittill("match_start_timer_beginning");', CompletionItemKind.Event),
    new CompletionItem('level waittill("hostmigration_enoughplayers");', CompletionItemKind.Event),
    new CompletionItem('level waittill("stop_spawn_profile");', CompletionItemKind.Event),
    new CompletionItem('level waittill("end_spawn_graph");', CompletionItemKind.Event),
    new CompletionItem('level waittill("spawn_graph_stop_draw");', CompletionItemKind.Event),
    new CompletionItem('level waittill("stop_spawn_weight_debug");', CompletionItemKind.Event),
    new CompletionItem('level waittill("exitLevel_called");', CompletionItemKind.Event),
    new CompletionItem('level waittill("smokeTimesUp");', CompletionItemKind.Event),
    new CompletionItem('level waittill("down_to_one");', CompletionItemKind.Event),
    new CompletionItem('level waittill("arena_flag_time");', CompletionItemKind.Event),
    new CompletionItem('level waittill("reset_grnd_drops");', CompletionItemKind.Event),
    new CompletionItem('level waittill("hq_reset");', CompletionItemKind.Event),
    new CompletionItem('level waittill("awardHQPointsRunning");', CompletionItemKind.Event),
    new CompletionItem('level waittill("bomb_defused");', CompletionItemKind.Event),
    new CompletionItem('level waittill("overtime_ended");', CompletionItemKind.Event),
    new CompletionItem('level waittill("disconnect");', CompletionItemKind.Event),
    new CompletionItem('level waittill("waitSkipped");', CompletionItemKind.Event),
    new CompletionItem('level waittill("graceperiod_done");', CompletionItemKind.Event),
    new CompletionItem('level waittill("ac130player_removed");', CompletionItemKind.Event),
    new CompletionItem('level waittill("post_effects_disabled");', CompletionItemKind.Event),
    new CompletionItem('level waittill("stop_rotatePlane_thread");', CompletionItemKind.Event),
    new CompletionItem('level waittill("gun_fired_and_ready_105mm");', CompletionItemKind.Event),
    new CompletionItem('level waittill("debug_airstrike");', CompletionItemKind.Event),
    new CompletionItem('level waittill("keepEMPTimeRemaining");', CompletionItemKind.Event),
    new CompletionItem('level waittill("emp_ended");', CompletionItemKind.Event),
    new CompletionItem('level waittill("helicopter_done");', CompletionItemKind.Event),
    new CompletionItem('level waittill("nuke_EMPJam");', CompletionItemKind.Event),
    new CompletionItem('level waittill("keepNukeEMPTimeRemaining");', CompletionItemKind.Event),
    new CompletionItem('level waittill("nuke_emp_ended");', CompletionItemKind.Event)
];
